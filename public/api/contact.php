<?php
/**
 * SAFE Géotechnique — réception des formulaires (devis + recrutement) et envoi
 * via Resend. Version PHP pour hébergement OVH mutualisé (Apache + PHP).
 *
 * La clé API Resend NE DOIT PAS être écrite ici. Elle est lue depuis une
 * variable d'environnement RESEND_API_KEY, à définir sur l'hébergement OVH
 * (par exemple via une ligne `SetEnv RESEND_API_KEY re_...` dans un .htaccess
 * NON versionné, ou la configuration PHP de l'hébergement).
 *
 * Destinataires (consigne client) :
 *   - devis       -> lebihan@resum.fr
 *   - recrutement -> v.lebihan@ftcs-forage.com
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$apiKey = getenv('RESEND_API_KEY');
if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'RESEND_API_KEY manquante côté serveur.']);
    exit;
}

$from = getenv('RESEND_FROM') ?: 'SAFE Géotechnique <onboarding@resend.dev>';

$RECIPIENTS = [
    'devis'       => 'lebihan@resum.fr',
    'recrutement' => 'v.lebihan@ftcs-forage.com',
];

$raw  = file_get_contents('php://input');
$body = json_decode($raw, true);
if (!is_array($body)) { $body = []; }

$type   = isset($body['type']) ? $body['type'] : '';
$fields = (isset($body['fields']) && is_array($body['fields'])) ? $body['fields'] : [];
$cv     = isset($body['cv']) && is_array($body['cv']) ? $body['cv'] : null;

if (!isset($RECIPIENTS[$type])) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Type de demande invalide.']);
    exit;
}
$to = $RECIPIENTS[$type];

$esc = function ($s) {
    return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
};

$rows = '';
foreach ($fields as $k => $v) {
    if (trim((string)$v) === '') { continue; }
    $rows .= '<tr><td style="padding:6px 14px 6px 0;color:#6e6576;white-space:nowrap;vertical-align:top">'
        . $esc($k) . '</td><td style="padding:6px 0;color:#1b141d;white-space:pre-wrap">'
        . $esc($v) . '</td></tr>';
}

$who = !empty($fields['Nom et prénom'])
    ? $fields['Nom et prénom']
    : trim((isset($fields['Nom']) ? $fields['Nom'] : '') . ' ' . (isset($fields['Prénom']) ? $fields['Prénom'] : ''));
if ($who === '') { $who = 'Site web'; }

if ($type === 'recrutement') {
    $poste   = !empty($fields['Poste visé']) ? $fields['Poste visé'] : 'spontanée';
    $subject = "Candidature — $poste — $who";
    $title   = 'Nouvelle candidature';
} else {
    $besoin  = !empty($fields['Besoin']) ? $fields['Besoin'] : (!empty($fields['Type de projet']) ? $fields['Type de projet'] : 'projet');
    $subject = "Demande de devis — $besoin — $who";
    $title   = 'Nouvelle demande de devis';
}

$html = '<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1b141d">'
    . '<h2 style="color:#8d2a63;margin:0 0 14px">' . $esc($title) . '</h2>'
    . '<p style="color:#6e6576;margin:0 0 16px">Envoyée depuis le site SAFE Géotechnique.</p>'
    . '<table style="border-collapse:collapse">' . $rows . '</table>'
    . ($cv ? '<p style="color:#6e6576;margin:18px 0 0">CV joint : ' . $esc($cv['filename']) . '</p>' : '')
    . '</div>';

$payload = [
    'from'    => $from,
    'to'      => [$to],
    'subject' => $subject,
    'html'    => $html,
];

$submitter = isset($fields['E-mail']) ? $fields['E-mail'] : (isset($fields['Email']) ? $fields['Email'] : null);
if ($submitter) { $payload['reply_to'] = $submitter; }

if ($cv && !empty($cv['base64']) && !empty($cv['filename'])) {
    $payload['attachments'] = [[
        'filename' => $cv['filename'],
        'content'  => $cv['base64'],
    ]];
}

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_TIMEOUT        => 20,
]);
$resp = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err  = curl_error($ch);
curl_close($ch);

if ($err) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Connexion à Resend impossible.', 'detail' => $err]);
    exit;
}
if ($code < 200 || $code >= 300) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Échec de l’envoi Resend.', 'detail' => $resp]);
    exit;
}

http_response_code(200);
echo json_encode(['ok' => true]);

/* Fonction serverless (Vercel) : reçoit les formulaires du site et envoie un
   e-mail via Resend. La clé API reste côté serveur (variable d'environnement),
   jamais exposée au navigateur.

   Variables d'environnement à définir sur l'hébergeur (et dans .env en local) :
   - RESEND_API_KEY : votre clé API Resend (re_...).
   - RESEND_FROM    : expéditeur sur un domaine VÉRIFIÉ dans Resend,
                      ex. "SAFE Géotechnique <no-reply@safe-geotechnique.fr>".

   Destinataires (consigne client) :
   - devis       -> lebihan@resum.fr
   - recrutement -> v.lebihan@ftcs-forage.com
*/

const RECIPIENTS = {
  devis: 'lebihan@resum.fr',
  recrutement: 'v.lebihan@ftcs-forage.com',
};

const esc = (s = '') =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function rowsHtml(fields) {
  return Object.entries(fields)
    .filter(([, v]) => v != null && String(v).trim() !== '')
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#6e6576;white-space:nowrap;vertical-align:top">${esc(k)}</td>` +
        `<td style="padding:6px 0;color:#1b141d;white-space:pre-wrap">${esc(v)}</td></tr>`
    )
    .join('');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ ok: false, error: 'RESEND_API_KEY manquante côté serveur.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const { type, fields = {}, cv } = body;
    const to = RECIPIENTS[type];
    if (!to) return res.status(400).json({ ok: false, error: 'Type de demande invalide.' });

    const submitterEmail = fields['E-mail'] || fields['Email'] || fields['email'];
    const who = fields['Nom et prénom'] || [fields['Nom'], fields['Prénom']].filter(Boolean).join(' ') || 'Site web';

    const subject =
      type === 'recrutement'
        ? `Candidature — ${fields['Poste visé'] || 'spontanée'} — ${who}`
        : `Demande de devis — ${fields['Besoin'] || fields['Type de projet'] || 'projet'} — ${who}`;

    const title = type === 'recrutement' ? 'Nouvelle candidature' : 'Nouvelle demande de devis';
    const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1b141d">
      <h2 style="color:#8d2a63;margin:0 0 14px">${title}</h2>
      <p style="color:#6e6576;margin:0 0 16px">Envoyée depuis le site SAFE Géotechnique.</p>
      <table style="border-collapse:collapse">${rowsHtml(fields)}</table>
      ${cv ? `<p style="color:#6e6576;margin:18px 0 0">CV joint : ${esc(cv.filename)}</p>` : ''}
    </div>`;

    const payload = {
      from: process.env.RESEND_FROM || 'SAFE Géotechnique <onboarding@resend.dev>',
      to: [to],
      subject,
      html,
    };
    if (submitterEmail) payload.reply_to = submitterEmail;
    if (cv && cv.base64 && cv.filename) {
      payload.attachments = [{ filename: cv.filename, content: cv.base64 }];
    }

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const detail = await r.text();
      return res.status(502).json({ ok: false, error: 'Échec de l’envoi Resend.', detail });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}

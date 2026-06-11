// Envoi des formulaires vers la fonction serverless /api/contact (Resend).
// Repli automatique en mailto si l'API n'est pas disponible (site statique,
// fonction non déployée, etc.) pour que le formulaire fonctionne partout.

export function fileToCv(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null);
    const fr = new FileReader();
    fr.onload = () => resolve({ filename: file.name, type: file.type, base64: String(fr.result).split(',')[1] });
    fr.onerror = reject;
    fr.readAsDataURL(file);
  });
}

export async function sendForm({ type, fields, cv }) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, fields, cv }),
  });
  if (!res.ok) {
    let detail = '';
    try { detail = (await res.json()).error || ''; } catch { /* ignore */ }
    throw new Error(detail || `HTTP ${res.status}`);
  }
  return res.json();
}

export function mailtoFallback(to, subject, fields) {
  const body = Object.entries(fields)
    .filter(([, v]) => v != null && String(v).trim() !== '')
    .map(([k, v]) => `${k} : ${v}`)
    .join('\n');
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

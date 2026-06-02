import { useEffect } from 'react';

// Met à jour le <title> et la meta description selon la page.
export default function Seo({ title, description }) {
  useEffect(() => {
    const full = title?.includes('SAFE') ? title : `${title} | SAFE Géotechnique`;
    if (title) document.title = full;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
}

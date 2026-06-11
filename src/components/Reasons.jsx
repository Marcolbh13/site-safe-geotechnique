import Reveal from './Reveal.jsx';
import Decor from './Decor.jsx';
import Icon from './Icon.jsx';

// « Pourquoi / garanties » : points en colonnes ouvertes (filets, losange),
// sans boîtes. Sert aussi de réassurance / preuve sociale.
export default function Reasons({ label, title, intro, items, tone, illustration, illSize = 'max-w-[300px]' }) {
  const cols = items.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3';
  return (
    <section className={`section relative overflow-hidden ${tone === 'mist' ? 'bg-mist border-y border-line' : ''}`}>
      <Decor />
      <div className="container-safe relative z-10">
        <div className={illustration ? 'grid lg:grid-cols-[1.2fr_0.8fr] gap-x-10 gap-y-6 items-center mb-[clamp(2rem,4vw,3rem)]' : 'mb-[clamp(2rem,4vw,3rem)]'}>
          <Reveal className="max-w-[700px]">
            <p className="label mb-4">{label}</p>
            <h2>{title}</h2>
            {intro && <p className="text-slate mt-4 text-[1.05rem]">{intro}</p>}
          </Reveal>
          {illustration && (
            <Reveal delay={120} className="hidden lg:block">
              <img src={illustration} alt="" aria-hidden="true" className={`w-full ${illSize} ml-auto`} loading="lazy" />
            </Reveal>
          )}
        </div>
        <div className={`grid sm:grid-cols-2 ${cols} gap-x-[clamp(2rem,5vw,3.5rem)]`}>
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 70} className="flex gap-4 py-5 border-t border-line">
              <span className="relative inline-grid place-items-center w-11 h-11 shrink-0" aria-hidden="true">
                <span className="absolute inset-0 rotate-45 rounded-[26%] border-2 border-safe-magenta/30" />
                <Icon name={it.icon} className="relative w-[22px] h-[22px] text-safe-magenta" />
              </span>
              <div>
                <h3 className="text-[1.05rem] mb-1">{it.t}</h3>
                <p className="text-slate text-[0.94rem]">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

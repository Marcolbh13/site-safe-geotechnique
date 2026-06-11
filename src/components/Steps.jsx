import Reveal from './Reveal.jsx';
import Decor from './Decor.jsx';
import Icon from './Icon.jsx';

// Processus / méthode en étapes numérotées (éditorial, sans boîtes).
export default function Steps({ label, title, intro, steps, tone, illustration, illSize = 'max-w-[300px]', arrows = false }) {
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
        <ol className="grid gap-x-[clamp(2rem,5vw,3.5rem)] gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 70}
              className={`relative ${i > 0 && !arrows ? 'lg:border-l lg:border-line lg:pl-[clamp(1rem,2vw,2rem)]' : ''}`}>
              {arrows && i > 0 && (
                <Icon
                  name="arrow"
                  aria-hidden="true"
                  className="hidden lg:block absolute top-1.5 w-[26px] h-[26px] text-safe-magenta/45 -translate-x-1/2"
                  style={{ left: 'calc(clamp(2rem,5vw,3.5rem) / -2)' }}
                />
              )}
              <span className="font-mono font-bold text-[1.7rem] leading-none text-transparent bg-clip-text bg-safe-gradient">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[1.1rem] mt-3 mb-1.5">{s.t}</h3>
              <p className="text-slate text-[0.95rem]">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

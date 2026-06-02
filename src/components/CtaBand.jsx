import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { EMAILS } from '../data/site.js';

export default function CtaBand({
  title = 'Un projet, une parcelle, une question technique ?',
  text = "Parlons de votre besoin. Nous étudions chaque projet, qu'il s'agisse d'un ouvrage d'envergure, d'un bâtiment ou du terrain d'un particulier.",
}) {
  return (
    <section className="section-tight">
      <div className="container-safe">
        <div className="cta-band">
          <h2 className="relative text-white">{title}</h2>
          <p className="relative mx-auto mt-3 mb-7 max-w-[560px] text-white/90">{text}</p>
          <div className="relative flex flex-wrap justify-center gap-[0.85rem]">
            <Link to="/contact" className="btn btn-light">
              Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
            </Link>
            <a
              href={`mailto:${EMAILS.devis}`}
              className="btn text-white hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.55)' }}
            >
              <Icon name="mail" className="w-[18px] h-[18px]" /> {EMAILS.devis}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

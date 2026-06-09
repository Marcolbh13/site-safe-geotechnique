import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Decor from './Decor.jsx';
import { COMPANY } from '../data/site.js';

// Bande pleine largeur (pas de carte flottante) : plus éditorial, plus humain.
export default function CtaBand({
  title = 'Travaillons ensemble',
  text = "Un projet, un terrain, une question technique ? Décrivez-nous votre besoin : nous revenons vers vous au plus vite.",
}) {
  return (
    <section className="relative overflow-hidden bg-safe-gradient text-white">
      <Decor variant="dark" />
      <div className="container-safe relative z-10 text-center" style={{ paddingBlock: 'clamp(3rem,7vw,5rem)' }}>
        <h2 className="text-white">{title}</h2>
        <p className="mx-auto mt-4 mb-8 max-w-[580px] text-white/90 text-[1.06rem]">{text}</p>
        <div className="flex flex-wrap justify-center gap-[0.85rem]">
          <Link to="/contact" className="btn btn-light">
            Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
          </Link>
          <a href={COMPANY.phoneHref} className="btn text-white" style={{ borderColor: 'rgba(255,255,255,.55)' }}>
            <Icon name="phone" className="w-[18px] h-[18px]" /> {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

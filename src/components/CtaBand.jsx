import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { COMPANY } from '../data/site.js';

export default function CtaBand({
  title = 'Travaillons ensemble',
  text = "Un projet, un terrain, une question technique ? Décrivez-nous votre besoin : nous revenons vers vous au plus vite.",
}) {
  return (
    <section className="section-tight">
      <div className="container-safe">
        <div className="cta-band text-center">
          <h2 className="relative text-white">{title}</h2>
          <p className="relative mx-auto mt-3 mb-7 max-w-[560px] text-white/90">{text}</p>
          <div className="relative flex flex-wrap justify-center gap-[0.85rem]">
            <Link to="/contact" className="btn btn-light">
              Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
            </Link>
            <a href={COMPANY.phoneHref} className="btn text-white" style={{ borderColor: 'rgba(255,255,255,.55)' }}>
              <Icon name="phone" className="w-[18px] h-[18px]" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

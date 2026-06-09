import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Sondage from './pages/Sondage.jsx';
import Laboratoire from './pages/Laboratoire.jsx';
import Missions from './pages/Missions.jsx';
import LoiElan from './pages/LoiElan.jsx';
import Contact from './pages/Contact.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sondage" element={<Sondage />} />
        <Route path="/laboratoire" element={<Laboratoire />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/loi-elan" element={<LoiElan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />

        {/* Anciennes URLs */}
        <Route path="/expertise" element={<Navigate to="/sondage" replace />} />
        <Route path="/missions-g1-a-g5" element={<Navigate to="/missions" replace />} />
        <Route path="/loi_elan" element={<Navigate to="/loi-elan" replace />} />
        <Route path="/nous-contacter" element={<Navigate to="/contact" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

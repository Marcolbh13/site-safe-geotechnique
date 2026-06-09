import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Expertise from './pages/Expertise.jsx';
import APropos from './pages/APropos.jsx';
import LoiElan from './pages/LoiElan.jsx';
import Recrutement from './pages/Recrutement.jsx';
import Contact from './pages/Contact.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/loi-elan" element={<LoiElan />} />
        <Route path="/recrutement" element={<Recrutement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />

        {/* Anciennes URLs -> nouvelle structure */}
        <Route path="/sondages" element={<Navigate to="/expertise#sondages" replace />} />
        <Route path="/laboratoire" element={<Navigate to="/expertise#laboratoire" replace />} />
        <Route path="/ingenierie" element={<Navigate to="/expertise#missions" replace />} />
        <Route path="/missions-g1-a-g5" element={<Navigate to="/expertise#missions" replace />} />
        <Route path="/loi_elan" element={<Navigate to="/loi-elan" replace />} />
        <Route path="/references" element={<Navigate to="/a-propos" replace />} />
        <Route path="/rse" element={<Navigate to="/a-propos" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

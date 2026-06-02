import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Sondages from './pages/Sondages.jsx';
import Laboratoire from './pages/Laboratoire.jsx';
import Ingenierie from './pages/Ingenierie.jsx';
import References from './pages/References.jsx';
import Rse from './pages/Rse.jsx';
import Recrutement from './pages/Recrutement.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sondages" element={<Sondages />} />
        <Route path="/laboratoire" element={<Laboratoire />} />
        <Route path="/ingenierie" element={<Ingenierie />} />
        <Route path="/references" element={<References />} />
        <Route path="/rse" element={<Rse />} />
        <Route path="/recrutement" element={<Recrutement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

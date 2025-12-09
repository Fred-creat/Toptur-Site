import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Passeios from "./pages/Passeios";
import Contato from "./pages/Contato";

import VoltaIlha from "./pages/passeios/VoltaIlha";
import Garapua from "./pages/passeios/Garapua";
import Bainema from "./pages/passeios/Bainema";
import Gamboa from "./pages/passeios/Gamboa";
import Buggy from "./pages/passeios/Buggy";
import QuatroXQuatro from "./pages/passeios/QuatroXQuatro";

export default function App() {
  return (
    <>
      {/* HEADER SEMPRE NO TOPO */}
      <Header />

      {/* AQUI FICAM AS PÁGINAS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passeios" element={<Passeios />} />

        <Route path="/passeios/volta-ilha" element={<VoltaIlha />} />
        <Route path="/passeios/garapua" element={<Garapua />} />
        <Route path="/passeios/bainema" element={<Bainema />} />
        <Route path="/passeios/gamboa" element={<Gamboa />} />
        <Route path="/passeios/buggy" element={<Buggy />} />
        <Route path="/passeios/4x4" element={<QuatroXQuatro />} />

        <Route path="/contato" element={<Contato />} />
      </Routes>

      {/* FOOTER SEMPRE NO FINAL */}
      <Footer />
    </>
  );
}

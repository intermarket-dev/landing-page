import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Encabezado from "./components/navegacion/Encabezado";

import Caracteristicas from "./views/Caracteristicas";
import Equipo from "./views/Equipo";
import Beneficios from "./views/Beneficios";
import Pagina404 from "./views/Pagina404";

import "./App.css"


const App = () => {
  return (
    <Router>
      <Encabezado />
      
      <main className="margen-superior-main">
        <Routes>
       
          
          <Route path="/" element={<Caracteristicas/>} />
          <Route path="/Beneficios" element={<Beneficios />} />
          <Route path="/Equipo" element={<Equipo />} />
          
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;


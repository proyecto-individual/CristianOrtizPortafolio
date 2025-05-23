import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Menu from './Menu'
import RedesSociales from './RedesSociales'
import Inicio from './Inicio'
import Proyectos from './Proyectos'

import Periodismo from './Periodismo'
import CayaraAyacucho from './CayaraAyacucho'
import ForoApec from './ForoApec'
import VencedoresAyacucho from './VencedoresAyacucho'
import CiclonYaku from './CiclonYaku'
import CantagalloAyacucho from './CantagalloAyacucho'
import MujerTrabajadora from './MujerTrabajadora'
import JusticiaDignidad from './JusticiaDignidad'
import PeriodismoExtra from './PeriodismoExtra'

import Deporte from './Deporte'
import Bio from './Bio'

import './App.css'
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="datos">
            <h2 className="nombre">Cristian Ortiz Sanchez</h2>
            <p className="profesion">Fotógrafo</p>
          </div>
          <div className="menu-nav">
            <Menu />
          </div>
          <RedesSociales />
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Proyectos" element={<Proyectos />} />
            
            <Route path="/Periodismo" element={<Periodismo />} />
            <Route path="/CayaraAyacucho" element={<CayaraAyacucho />} />
            <Route path="/ForoApec" element={<ForoApec />} />
            <Route path="/VencedoresAyacucho" element={<VencedoresAyacucho />} />
            <Route path="/CiclonYaku" element={<CiclonYaku />} />
            <Route path="/CantagalloAyacucho" element={<CantagalloAyacucho />} />
            <Route path="/MujerTrabajadora" element={<MujerTrabajadora />} />
            <Route path="/JusticiaDignidad" element={<JusticiaDignidad />} />

            <Route path="/PeriodismoExtra" element={<PeriodismoExtra />} />
            <Route path="/Deporte" element={<Deporte />} />
            <Route path="/Bio" element={<Bio />} />
          </Routes>
        </main>

        {/* <footer className="footer">
          <p>© 2025 Mi Sitio Web. Todos los derechos reservados.</p>
        </footer> */}
      </div> 

    </Router>
  )
}
export default App
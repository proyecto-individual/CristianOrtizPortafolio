import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio';
import Proyectos from './Proyectos';
import Periodismo from './Periodismo';

function PeriodismoExtra() {
  return (
      <section class="periodismo-extra">
        <div className='lista-periodismo'>
          <div className="noticia-link"><Link to="/noticia/ayacucho-cayara">AYACUCHO, CAYARA</Link></div>
          <div className="noticia-link"><Link to="/noticia/apec-marcha">Foro del APEC y marcha en el Perú</Link></div>
          <div className="noticia-link"><Link to="/noticia/vencedores-ayacucho">Vencedores de Ayacucho</Link></div>
          <div className="noticia-link"><Link to="/noticia/ciclon-yaku">CICLÓN YAKU, LIMA ESTE</Link></div>
          <div className="noticia-link"><Link to="/noticia/shipibo-cantagallo">Comunidad Shipibo-Konibo de Cantagallo</Link></div>
          <div className="noticia-link"><Link to="/noticia/dia-mujer">Día Internacional de la Mujer Trabajadora</Link></div>
          <div className="noticia-link"><Link to="/noticia/marcha-justicia">Marcha “Por la Justicia y la Dignidad”</Link></div>
        </div>


        <div class="proyecto-extra-periodismo">
          
          {/* <h1 class="titulo-seccion">Periodismo</h1> */}
          <div className="peri-proyecto-extra">
            
            <Routes>
              <Route path="/" element={<Periodismo />} />
            </Routes>
          </div>

        </div>
        
      </section>
  );
}
export default PeriodismoExtra;
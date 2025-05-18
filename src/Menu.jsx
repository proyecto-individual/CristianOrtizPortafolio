import { Link } from 'react-router-dom';
import Flecha from './assets/img/flecha-hacia-abajo.png';

const menu = [
  { label: 'INICIO', to: '/Inicio' },
  {
    label: 'PROYECTOS', to: '/Proyectos',
    submenu: [
      { label: 'JARA', href: 'Ate.html' },
      { label: 'Una tradición de sincretismo en los pueblos andinos', href: 'Lima.html' }
    ]
  },
  {
    label: 'PERIODISMO', to: '/Periodismo',
    submenu: [
      { label: 'Ayacucho, Cayara', href: 'Ate.html' },
      { label: 'Foro del APEC y marcha en el Perú', href: 'Lima.html' },
      { label: 'Vencedores de ayacucho', href: 'Peru.html' },
      { label: 'Ciclon Yaku, Lima Este', href: 'Peru.html' },
      { label: 'La comunidad indígena Shipibo-Konibo de Cantagallo', href: 'Peru.html' },
      { label: 'Día Internacional de la Mujer Trabajadora', href: 'Peru.html' },
      { label: 'marcha "Por la justicia y la dignidad"', href: 'Peru.html' }
    ]
  },
  {
    label: 'PERIODISMOEx', to: '/PeriodismoExtra',
    submenu: [
      { label: 'Ayacucho, Cayara', href: 'Ate.html' },
      { label: 'Foro del APEC y marcha en el Perú', href: 'Lima.html' },
      { label: 'Vencedores de ayacucho', href: 'Peru.html' },
      { label: 'Ciclon Yaku, Lima Este', href: 'Peru.html' },
      { label: 'La comunidad indígena Shipibo-Konibo de Cantagallo', href: 'Peru.html' },
      { label: 'Día Internacional de la Mujer Trabajadora', href: 'Peru.html' },
      { label: 'marcha "Por la justicia y la dignidad"', href: 'Peru.html' }
    ]
  },
  {
    label: 'DEPORTE', href: '/Deporte',
    submenu: [
      { label: 'FEDENASD', href: 'Ate.html' }
    ]
  },
  { label: 'BIO', href: '/Bio' }
];

function Menu() {
  return (
    <ul className="navegacion">
      {menu.map((item, i) => (
        <li key={i}>
          <div>
            {item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
            {item.submenu && (
              <>
                <img src={Flecha} alt="flecha" className="flecha" />
                <ul className="submenu">
                  {item.submenu.map((sub, j) => (
                    <li key={j}>
                      <a href={sub.href}>{sub.label}</a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Menu;
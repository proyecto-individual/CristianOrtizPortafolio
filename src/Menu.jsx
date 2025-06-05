import { useLocation, Link } from 'react-router-dom';
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
      { label: 'Ayacucho, Cayara', to: '/CayaraAyacucho' },
      { label: 'Foro del APEC y marcha en el Perú', to: '/ForoApec' },
      { label: 'Vencedores de ayacucho', to: '/VencedoresAyacucho' },
      { label: 'Ciclon Yaku, Lima Este', to: '/CiclonYaku' },
      { label: 'La comunidad indígena Shipibo-Konibo de Cantagallo', to: '/CantagalloAyacucho' },
      { label: 'Día Internacional de la Mujer Trabajadora', to: '/MujerTrabajadora' },
      { label: 'marcha "Por la justicia y la dignidad"', to: '/JusticiaDignidad' }
    ]
  },
  {
    label: 'DEPORTE', to: '/Deporte',
    submenu: [
      { label: 'FEDENASD', href: 'Ate.html' }
    ]
  },
  { label: 'BIO', to: '/Bio' }
];

function Menu() {
  
  const location = useLocation();

  return (
    <ul className="navegacion">
      {menu.map((item, i) => {
        const allPaths = [item.to, ...(item.submenu?.map(sub => sub.to) || [])];
        const isActive = allPaths.some(path => location.pathname.startsWith(path));
        
        return (
          <li key={i} className={isActive ? 'activo' : ''}>
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
                        <Link to={sub.to}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
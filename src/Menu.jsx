import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Flecha from './assets/img/flecha-hacia-abajo.png';

const menu = [
  { label: 'INICIO', to: '/Inicio' },
  {
    label: 'PROYECTOS', to: '/Proyectos',
  },
  {
    label: 'PERIODISMO',
    submenu: [
      { label: 'Resumen', to: '/Periodismo' },
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
    label: 'DEPORTE / INTEGRACIÓN', to: '/Deporte',
  },
];

function Menu() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [periodismoOpen, setPeriodismoOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detectar si es mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cerrar submenú al cerrar menú hamburguesa
  useEffect(() => {
    if (!menuOpen) setPeriodismoOpen(false);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setPeriodismoOpen(false);
  };

  return (
    <>
      <button className="menu-hamburguesa" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
      <ul className={`navegacion ${menuOpen ? 'abierto' : ''}`}>
        {menu.map((item, i) => {
          const allPaths = [item.to, ...(item.submenu?.map(sub => sub.to) || [])];
          const isActive = allPaths.some(path => location.pathname.startsWith(path));
          const isPeriodismo = item.label === 'PERIODISMO';

          // Eventos para PERIODISMO: hover en desktop, solo click en mobile
          const liProps = isPeriodismo && !isMobile
            ? {
                onMouseEnter: () => setPeriodismoOpen(true),
                onMouseLeave: () => setPeriodismoOpen(false)
              }
            : {};

          return (
            <li key={i} className={isActive ? 'activo' : ''} {...liProps}>
              <div>
                {item.to && !isPeriodismo ? (
                  <Link to={item.to} onClick={handleLinkClick}>{item.label}</Link>
                ) : null}
                {isPeriodismo ? (
                  <button
                    className="submenu-toggle"
                    onClick={() => setPeriodismoOpen((open) => !open)}
                    aria-label="Mostrar/ocultar submenú de Periodismo"
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      marginLeft: 0,
                      display: isMobile ? 'block' : 'flex',
                      alignItems: 'center',
                      width: isMobile ? '100%' : 'auto',
                      textAlign: isMobile ? 'center' : 'left',
                      justifyContent: isMobile ? 'center' : 'flex-start',
                    }}
                  >
                    <span style={{
                      cursor: 'pointer',
                      userSelect: 'none',
                      marginRight: '8px',
                      fontSize: isMobile ? '1.5rem' : 'inherit',
                      width: isMobile ? '100%' : 'auto',
                      display: isMobile ? 'inline-block' : 'inline',
                    }}>
                      {item.label}
                    </span>
                    <img
                      src={Flecha}
                      alt="flecha"
                      className="flecha"
                      style={{
                        transform: periodismoOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                        marginLeft: isMobile ? 0 : '6px'
                      }}
                    />
                  </button>
                ) : null}
                {item.submenu && (
                  <ul
                    className="submenu"
                    style={
                      isPeriodismo
                        ? { display: periodismoOpen ? 'block' : 'none' }
                        : {}
                    }
                  >
                    {item.submenu.map((sub, j) => (
                      <li key={j}>
                        <Link to={sub.to} onClick={handleLinkClick}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
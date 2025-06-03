import { useState, useEffect } from 'react';

const imagenes =[
  { path: '/img/proyectos/jara/COVER.jpg', texto: 'Proyecto Jara'},
  { path: '/img/proyectos/tradicion-sincretismo/_MG_2160.jpg', texto: 'Tradicion y Sincretismo'},
  { path: '/img/periodismo/ayacucho-cayara/36 AÑOS DESPUES/_MG_1371-2.jpg', texto: 'Ayacucho Cayara'},
  { path: '/img/periodismo/ciclon-yaku/_MG_9746.jpg', texto: 'Ciclon Yaku'},
  { path: '/img/periodismo/comunidad-cantagallo/IMG_7236-2.jpg', texto: 'La comunidad indígena Shipibo-Konibo de Cantagallo'},
  { path: '/img/periodismo/foro-apec/_MG_0593.jpg', texto: 'Foro APEC y marcha en el Perú'},
  { path: '/img/periodismo/justicia-dignidad/_MG_6535.jpg', texto: 'Marcha "Por la justicia y la dignidad"'},
  { path: '/img/periodismo/mujer-trabajadora/DIA DE LA MUJER 2/IMG_7605.jpg', texto: 'Día Internacional de la Mujer Trabajadora'},
  { path: '/img/periodismo/vencedores de ayacucho/IMG_8154.jpg', texto: 'Vencedores de Ayacucho'},
  { path: '/img/deporte/fedenasd/_MG_5345.jpg', texto: 'FEDENASD'},
]

function Inicio(){
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    //style={{position: 'relative', height: 'calc(100vh - 120px)'}}
    <div className='inicio'> 
      {imagenes.map((imagen, idx) => (
        <>
          <img
            key={idx}
            src={imagen.path}
            alt={`Imagen ${idx + 1}`}
            className={`hero-img ${idx === indice ? 'active' : ''}`}
            style={{
              aspectRatio: '3/2',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
          <section className={`texto-imagen ${idx === indice ? 'active' : ''}`}>
            <h2>{imagen.texto}</h2>
          </section>
        </>
      ))}
    </div>
  )
}

export default Inicio;

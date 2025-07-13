import { useState, useEffect } from 'react';

const imagenes =[
  { path: '/img/proyectos/qara/COVER.jpg', texto: 'PROYECTO QARA'},
  { path: '/img/proyectos/tradicion-sincretismo/_MG_2160.jpg', texto: 'TRADICION Y SINCRETISMO'},
  { path: '/img/periodismo/ayacucho-cayara/36 AÑOS DESPUES/_MG_1371-2.jpg', texto: 'AYACUCHO CAYARA'},
  { path: '/img/periodismo/foro-apec/_MG_0593.jpg', texto: 'FORO APEC Y MARCHA EN EL PERÚ'},
  { path: '/img/periodismo/vencedores de ayacucho/IMG_8154.jpg', texto: 'VENCEDORES DE AYACUCHO'},
  { path: '/img/periodismo/ciclon-yaku/_MG_9644.jpg', texto: 'CICLON YAKU'},
  { path: '/img/periodismo/comunidad-cantagallo/IMG_7236-2.jpg', texto: 'LA COMUNIDAD INDÍGENA SHIPIBO-KONIBO DE CANTAGALLO'},
  { path: '/img/periodismo/mujer-trabajadora/IMG_7605.jpg', texto: 'DÍA INTERNACIONAL DE LA MUJER TRABAJADORA'},
  { path: '/img/periodismo/justicia-dignidad/_MG_6535.jpg', texto: 'MARCHA "POR LA JUSTICIA Y LA DIGNIDAD"'},
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

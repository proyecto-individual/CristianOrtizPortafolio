import { useState, useEffect } from 'react';

const imagenes =[
  '/img/proyectos/jara/11.jpg',
  '/img/proyectos/tradicion-sincretismo/_MG_1840.jpg',
  '/img/periodismo/ayacucho-cayara/CONMEMORACION CAYARA/SaveClip.App_445674958_768641108723468_3964174446516449061_n.jpg',
  '/img/periodismo/ciclon-yaku/_MG_9746.jpg',
  '/img/periodismo/comunidad-cantagallo/IMG_7384.jpg',
  '/img/periodismo/foro-apec/_MG_0511.jpg',
  '/img/periodismo/justicia-dignidad/IMG_6153.jpg',
  '/img/periodismo/mujer-trabajadora/DIA DE LA MUJER 2/IMG_7812.jpg',
  '/img/periodismo/vencedores de ayacucho/IMG_8388.jpg',
  '/img/deporte/fedenasd/_MG_5345.jpg',
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
    //, height: 'calc(100vh - 80px)'
    <div style={{ position: 'relative' }} className='inicio'> 
      {imagenes.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Imagen ${idx + 1}`}
          className={`hero-img ${idx === indice ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}

export default Inicio;

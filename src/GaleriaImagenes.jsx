import { useState, useEffect } from 'react';
import './index.css';

function GaleriaImagenes({ imagenes }) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const abrirVisor = (index) => setImagenSeleccionada(index);
  const cerrarVisor = () => setImagenSeleccionada(null);
  const siguiente = () => setImagenSeleccionada((prev) => (prev + 1) % imagenes.length);
  const anterior = () => setImagenSeleccionada((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  useEffect(() => {
    const manejarEscape = (e) => {
      if (e.key === 'Escape') {
        cerrarVisor();
      }
    };

    if (imagenSeleccionada !== null) {
      document.addEventListener('keydown', manejarEscape);
    }

    return () => document.removeEventListener('keydown', manejarEscape);
  }, [imagenSeleccionada]);

  return (
    <>
      <div className="proyecto-imagenes">
        {imagenes.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Imagen ${i + 1}`}
            className="proyecto-img"
            loading="lazy"
            onClick={() => abrirVisor(i)}
          />
        ))}
      </div>

      {imagenSeleccionada !== null && (
        <div className="overlay" onClick={cerrarVisor}>

          {/* Zonas clickeables laterales */}
          <div className="zona-clickeable zona-izquierda" onClick={(e) => { e.stopPropagation(); anterior(); }} />
          <div className="zona-clickeable zona-derecha" onClick={(e) => { e.stopPropagation(); siguiente(); }} />

          <img
            src={imagenes[imagenSeleccionada]}
            alt={`Imagen ampliada ${imagenSeleccionada + 1}`}
            className="foto-grande"
            onClick={(e) => e.stopPropagation()} // para que no se cierre al click en imagen
          />

          <button className="flecha-galeria izq" onClick={(e) => { e.stopPropagation(); anterior(); }}>❮</button>
          <button className="flecha-galeria der" onClick={(e) => { e.stopPropagation(); siguiente(); }}>❯</button>
        </div>
      )}
    </>
  );
}

export default GaleriaImagenes;

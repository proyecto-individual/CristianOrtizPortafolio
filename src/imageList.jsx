import { useState } from "react";
import "./App.css";


function ImageList({ imagenes }) {
  const [imagenActiva, setImagenActiva] = useState(imagenes[0]);

  const mover = (direccion) => {
    const idx = imagenes.indexOf(imagenActiva);
    if (direccion === "izquierda") {
      setImagenActiva(imagenes[(idx - 1 + imagenes.length) % imagenes.length]);
    } else {
      setImagenActiva(imagenes[(idx + 1) % imagenes.length]);
    }
  };

  return (
    <div className="galeria-container">
      <div className="imagen-central">
        <button onClick={() => mover("izquierda")}>&larr;</button>
        <img src={imagenActiva} alt="Imagen seleccionada" loading="lazy" />
        <button onClick={() => mover("derecha")}>&rarr;</button>
      </div>

      <div className="miniaturas-scroll">
        {imagenes.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Miniatura ${index + 1}`}
            className={img === imagenActiva ? "miniatura activa" : "miniatura"}
            onClick={() => setImagenActiva(img)}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
export default ImageList;
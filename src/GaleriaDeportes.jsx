import "./App.css";

function GaleriaDeportes({
  imagenes,
  abierta,
  setAbierta,
  indice,
  setIndice,
  mover,
}) {
  return (
    <>
      {/* MINIATURAS ----------------------------------------------------- */}
      <div className="grid-miniaturas">
        {imagenes.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Miniatura ${i + 1}`}
            loading="lazy"
            onClick={() => {
              setIndice(i);
              setAbierta(true);
            }}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {/* LIGHTBOX ------------------------------------------------------- */}
      {abierta && (
        <div className="overlay" onClick={() => setAbierta(false)}>
          {/* zonas laterales “invisibles” */}
          <div
            className="zona-clickeable zona-izquierda"
            onClick={(e) => {
              e.stopPropagation();
              mover(-1);
            }}
          />
          <div
            className="zona-clickeable zona-derecha"
            onClick={(e) => {
              e.stopPropagation();
              mover(1);
            }}
          />

          <img
            className="foto-grande"
            src={imagenes[indice]}
            alt={`Imagen ${indice + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          {/* flechas visibles */}
          <button
            className="flecha-galeria izq"
            onClick={(e) => {
              e.stopPropagation();
              mover(-1);
            }}
          >
            ❮
          </button>

          <button
            className="flecha-galeria der"
            onClick={(e) => {
              e.stopPropagation();
              mover(1);
            }}
          >
            ❯
          </button>
        </div>
      )}
    </>
  );
}

export default GaleriaDeportes;

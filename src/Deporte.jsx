import { useEffect, useState } from "react";
import GaleriaDeportes from "./GaleriaDeportes";

const deporteImgs = [
  '_MG_0255-2.jpg',
  '_MG_9090.jpg',
  '_MG_4823.jpg',
  '_MG_8338.jpg',
  '_MG_5345.jpg',
  '_MG_9832.jpg',
  '_MG_5685.jpg',
  '_MG_7438.jpg',
  '_MG_7053.jpg',
  '_MG_0507.jpg',
  '_MG_3217.jpg',
  '_MG_0493.jpg',
  '_MG_7023.jpg',
  '_MG_9262.jpg',
  '_MG_8299.jpg',
  '_MG_6810.jpg',
  '_MG_0500.jpg',
  '_MG_9609.jpg',
  '_MG_8542.jpg',
  '_MG_9638.jpg',
  '_MG_8251.jpg',
  '_MG_0617.jpg',
].map(img => `/img/deporte/fedenasd/${img}`);

function Deporte() {

  const [abierta, setAbierta] = useState(false);
  const [indice, setIndice] = useState(0);

  // Teclas ← y → para navegar
  useEffect(() => {
    if (!abierta) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
      if (e.key === "Escape") setAbierta(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [abierta]);

  const mover = (paso) => {
    setIndice((prev) => (prev + paso + deporteImgs.length) % deporteImgs.length);
  };

  return (
    <section className="deporte">
      {/* <h1 className="titulo-seccion">Deporte</h1> */}
      <div className="seccion-deporte">
        {[
          {
            src: "/img/deporte/fedenasd/_MG_5345.jpg",
            titulo: "FEDENASD - Deporte y Comunidad",
            descripcion: "Celebración del deporte y la inclusión. FEDENASD promueve actividades físicas que fortalecen el tejido social y visibilizan a atletas con discapacidad en espacios competitivos y comunitarios.",
          },
          {
            src: "/img/deporte/fedenasd/_MG_8338.jpg",
            titulo: "Fútbol Inclusivo",
            descripcion: "Iniciativas que integran a jóvenes con discapacidades en torneos intercomunales. Una fiesta del deporte y la solidaridad.",
          },
        ].map((card, idx) => {
          const indexInGaleria = deporteImgs.findIndex((img) => img === card.src);
          return (
            <div className="card-deporte" key={idx}>
              <div className="card-img">
                <img
                  src={card.src}
                  alt={card.titulo}
                  loading="lazy"
                  onClick={() => {
                    if (indexInGaleria !== -1) {
                      setIndice(indexInGaleria);
                      setAbierta(true);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="card-texto">
                <h2>{card.titulo}</h2>
                <p>{card.descripcion}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reutilizar el componente para miniaturas + lightbox */}
      <GaleriaDeportes
        imagenes={deporteImgs}
        abierta={abierta}
        setAbierta={setAbierta}
        indice={indice}
        setIndice={setIndice}
        mover={mover}
      />
    </section>
  )
}
export default Deporte;
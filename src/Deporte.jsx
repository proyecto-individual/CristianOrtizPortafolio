import GaleriaImagenes from "./GaleriaImagenes";

const deporteImgs = [
  '_MG_0400.jpg',
  '_MG_0493.jpg',
  '_MG_0500.jpg',
  '_MG_0507.jpg',
  '_MG_0615.jpg',
  '_MG_0617.jpg',
  '_MG_0641.jpg',
  '_MG_0650.jpg',
  '_MG_2942.jpg',
  '_MG_3217.jpg',
  '_MG_4823.jpg',
  '_MG_5345.jpg',
  '_MG_5415.jpg',
  '_MG_5685.jpg',
  '_MG_5757.jpg',
  '_MG_5784.jpg',
  '_MG_6765.jpg',
  '_MG_6810.jpg',
  '_MG_6832.jpg',
  '_MG_7019.jpg',
  '_MG_7023.jpg',
  '_MG_7053.jpg',
  '_MG_7405.jpg',
  '_MG_7438.jpg',
  '_MG_7445.jpg',
  '_MG_7455.jpg',
  '_MG_7473.jpg',
  '_MG_7477.jpg',
  '_MG_7494.jpg',
  '_MG_7576.jpg',
  '_MG_7630.jpg',
  '_MG_7691.jpg',
  '_MG_8116.jpg',
  '_MG_8237.jpg',
  '_MG_8251.jpg',
  '_MG_8288.jpg',
  '_MG_8299.jpg',
  '_MG_8338.jpg',
  '_MG_8419.jpg',
  '_MG_8493.jpg',
  '_MG_8502.jpg',
  '_MG_8542.jpg',
  '_MG_9090.jpg',
  '_MG_9167.jpg',
  '_MG_9220.jpg',
  '_MG_9262.jpg',
  '_MG_9281.jpg',
  '_MG_9609.jpg',
  '_MG_9638.jpg',
  '_MG_9657.jpg',
  '_MG_9683.jpg',
  '_MG_9685.jpg',
  '_MG_9727.jpg',
  '_MG_9832.jpg',
  '_MG_9847.jpg',
].map(img => `/img/deporte/fedenasd/${img}`);

function Deporte() {
  return (
    <div>
      <section class="deporte">
        <h1 class="titulo-seccion">Deporte</h1>

        <div class="deporte-galeria">
          <div className="deporte-texto">
            <div class="card-deporte">
              <div class="card-img">
                <img src="/img/deporte/fedenasd/_MG_0400.jpg" alt="Fedenasd 1" />
              </div>
              <div class="card-texto">
                <h2>FEDENASD - Deporte y Comunidad</h2>
                <p>Celebración del deporte y la inclusión. FEDENASD promueve actividades físicas que fortalecen el tejido social y visibilizan a atletas con discapacidad en espacios competitivos y comunitarios.</p>
              </div>
            </div>
            
            <div class="card-deporte">
              <div class="card-img">
                <img src="/img/deporte/fedenasd/_MG_9847.jpg" alt="Fedenasd 2" />
              </div>
              <div class="card-texto">
                <h2>Fútbol Inclusivo</h2>
                <p>Iniciativas que integran a jóvenes con discapacidades en torneos intercomunales. Una fiesta del deporte y la solidaridad.</p>
              </div>
            </div>

          </div>

          <GaleriaImagenes imagenes={deporteImgs} />
        </div>
      </section>

    </div>
  );
}
export default Deporte;
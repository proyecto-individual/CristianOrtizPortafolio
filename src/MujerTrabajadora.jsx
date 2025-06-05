import ImageList from "./ImageList";

const mujerTrabajadoraImgs = [
  'IMG_7605.jpg',
  'IMG_7663.jpg',
  'IMG_7065-4.jpg',
  'IMG_7019-2.jpg',
  'IMG_7124.jpg',
  'IMG_7715.jpg',
  'IMG_7592.jpg',
  'IMG_7812.jpg',
  'IMG_7088-2.jpg',
  '_MG_0920.jpg',
  '_MG_0908.jpg',
  'IMG_7170-3.jpg',
].map(img => `/img/periodismo/mujer-trabajadora/${img}`);

//const todasLasImagenes = [...mujerTrabajadoraImgs, ...mujerTrabajadora2Imgs];

function MujerTrabajadora() {
  return (
    <section className="justicia-wrapper">
      <h1>Día Internacional de la Mujer Trabajadora</h1>
      <p>
        Miles de mujeres marcharon por las calles del centro histórico de Lima y de distintas ciudades del país para reivindicar sus derechos y exigir el fin de la violencia machista. Portando carteles con frases como "Vivas nos queremos", "Juntas sin miedo" y "La sangre derramada jamás será olvidada", colectivos feministas y civiles, así como federaciones de estudiantes, recorrieron las avenidas Abancay, Nicolás de Piérola, Tacna y otras, demandando igualdad plena en todos los niveles (político, económico, jurídico y de género) y justicia para las mujeres.
      </p>

      <ImageList imagenes={mujerTrabajadoraImgs} />
    </section>
  );
}
export default MujerTrabajadora;
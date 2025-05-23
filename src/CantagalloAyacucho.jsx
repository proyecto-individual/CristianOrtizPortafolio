import ImageList from "./ImageList";

const comunidadCatagalloImgs = [
  'IMG_7195.jpg',
  'IMG_7202.jpg',
  'IMG_7222.jpg',
  'IMG_7224.jpg',
  'IMG_7230.jpg',
  'IMG_7236-2.jpg',
  'IMG_7251.jpg',
  'IMG_7262.jpg',
  'IMG_7273.jpg',
  'IMG_7277.jpg',
  'IMG_7301.jpg',
  'IMG_7315.jpg',
  'IMG_7328.jpg',
  'IMG_7336.jpg',
  'IMG_7342.jpg',
  'IMG_7384.jpg',
  'IMG_7399.jpg',
  'IMG_7419.jpg',
  'IMG_7425.jpg',
  'IMG_7439.jpg',
  'IMG_7524.jpg'
].map(img => `/img/periodismo/comunidad-cantagallo/${img}`);

function CantagalloAyacucho() {
  return (
    <section className="justicia-wrapper">
      <h1>La comunidad indígena Shipibo-Konibo de Cantagallo</h1>
      <p>
        Las prácticas y los conocimientos de la comunidad de los shipibos-konibos de Cantagallo, Lima, fueron declarados de interés nacional, a través de una ley dada por el Congreso de la República. El objetivo de ello es “salvaguardar y fortalecer su idioma, arte, prácticas y conocimientos; así como sus normas internas referidas a la convivencia”.
      </p>

      <ImageList imagenes={comunidadCatagalloImgs} />
    </section>
  );
}
export default CantagalloAyacucho;
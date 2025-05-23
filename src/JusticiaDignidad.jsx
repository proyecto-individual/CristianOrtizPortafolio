import ImageList from './ImageList';

const justiciaDignidadImgs = [
    'IMG_6153.jpg',
    'IMG_6173.jpg',
    'IMG_6209.jpg',
    'IMG_6260.jpg',
    'IMG_6293-2.jpg',
    'IMG_6370.jpg',
    '_MG_6500.jpg',
    '_MG_6514.jpg',
    '_MG_6535.jpg',
    '_MG_6565.jpg',
    '_MG_6579.jpg',
    '_MG_6604.jpg',
  ].map(img => `/img/periodismo/justicia-dignidad/${img}`);

function JusticiaDignidad() {
  return (
    <section className="justicia-wrapper">
      <h1>Marcha “Por la Justicia y la Dignidad”</h1>
      <p>
        Segundo día de marcha contra el gobierno de Dina Baluarte. Cientos de Peruanos de distintas regiones del país se congregaron en manifestación pacífica por acecinados y víctimas del 2022 – 2023
      </p>

      <ImageList imagenes={justiciaDignidadImgs} />
    </section>
  )
}
export default JusticiaDignidad;
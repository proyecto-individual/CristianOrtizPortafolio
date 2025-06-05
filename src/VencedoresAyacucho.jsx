import ImageList from "./ImageList";

const vencedoresAyacuchoImgs = [
  'IMG_8154.jpg',
  'IMG_8413.jpg',
  'IMG_8327.jpg',
  'IMG_8225.jpg',
  'IMG_8279.jpg',
  'IMG_8401.jpg',
  'IMG_8254.jpg',
  'IMG_8185.jpg',
  'IMG_8388.jpg',
].map(img => `/img/periodismo/vencedores de ayacucho/${img}`);

function ForoApec() {
  return (
    <section className="justicia-wrapper">
      <h1>Vencedores de ayacucho</h1>
      <h3>Patrimonio Cultural de la Nación.</h3>
      <p>El último domingo 30 de Marzo se celebró el Carnaval "Vencedores de Ayacucho" donde diferentes instituciones provinciales de Ayacucho participaron del evento en la iconica plaza de Acho.</p>
      <p>El tradicional carnaval Vencedores de Ayacucho, Patrimonio Cultural de la Nación, organizado por la Federación de Instituciones Provinciales de Ayacucho (Fedipa), el objetivo del carnaval Vencedores de Ayacucho 2025 “sigue siendo mantener la tradición, con sus diferentes costumbres y vestimentas, así como transmitir de generación en generación la autenticidad de cada pueblo de las 11 provincias que forman la región de Ayacucho”.</p>

      <ImageList imagenes={vencedoresAyacuchoImgs} />
    </section>
  );
}
export default ForoApec;
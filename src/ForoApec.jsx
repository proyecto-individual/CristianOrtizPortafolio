import ImageList from "./ImageList";

const foroApecImgs = [
  '_MG_0511.jpg',
  '_MG_0528-2.jpg',
  '_MG_0550.jpg',
  '_MG_0593.jpg',
  '_MG_0646-2.jpg',
  '_MG_0674.jpg',
  '_MG_0739.jpg',
  '_MG_0807.jpg',
  '_MG_0829.jpg',
  '_MG_0843.jpg',
  '_MG_0885.jpg',
  '_MG_0940.jpg',
  '_MG_0971.jpg',
  '_MG_1003.jpg',
  '_MG_1039.jpg',
  '_MG_1043.jpg',
  '_MG_1060.jpg',
  '_MG_1069.jpg'
].map(img => `/img/periodismo/foro-apec/${img}`);

function ForoApec() {
  return (
    <section className="justicia-wrapper">
      <h1>Foro del APEC y marcha en el Perú</h1>

      <p>Cientos de ciudadanos de diferentes gremios como transporte, comercio y universidades se reunieron en el cruce de las Av. Aviación y Canadá, cerca a la sede la APEC 2024 para exigir la derogación de la Ley 32108 (Ley contra el crimen organizado), archivamiento del proyecto de ley relacionado con el Terrorismo Urbano y mayor énfasis en la lucha por la seguridad ciudadana.</p>

      <ImageList imagenes={foroApecImgs} />
    </section>
  );
}
export default ForoApec;
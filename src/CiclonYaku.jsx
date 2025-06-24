import ImageList from "./ImageList";

const ciclonYakuImgs = [
  '_MG_9644.jpg',
  '_MG_9896.jpg',
  '_MG_9746.jpg',
  '_MG_9763.jpg',
  '_MG_9857.jpg',
  '_MG_9790.jpg',
  '_MG_9941.jpg',
  '_MG_9981.jpg',
  '_MG_9874-2.jpg',
  '_MG_9846.jpg',
  '_MG_9844.jpg',
  '_MG_9903.jpg',
].map(img => `/img/periodismo/ciclon-yaku/${img}`);

function CiclonYaku() {
  return (
    <section className="justicia-wrapper">
      <h1>CICLON YAKU, LIMA ESTE</h1>
      <p>El ciclón Yaku se desarrolló frente a las costas peruanas y se movió hacia el interior, generando condiciones ideales para las lluvias intensas debido a la combinación de temperatura y humedad. Este fenómeno climático, que se considera inusual para la zona, causó daños significativos, incluyendo la pérdida de vidas y la afectación de miles de personas y viviendas.</p>
      <p>A causa de los huaycos, cientos de familias de Lurigancho (Chosica) han tenido muchas pérdidas materiales. El agua del huaico ingresó a sus casas, e incluso algunos hogares fueron completamente destruidos. Los ciudadanos de esta localidad intentan rescatar algunas de sus pertenencias, y acomodan bolsas de tierra con la esperanza de disminuir el efecto de los deslizamientos en los siguientes días. Muchos denunciaron la ausencia de las autoridades ante esta situación, pues, hasta el momento en el que estas fotos fueron capturadas, ninguna entidad estatal acudió a socorrerlos u ofrecerles dónde quedarse.</p>
      <p>Los distritos afectados por el desborde fueron, Chaclacayo, Huachipa, Ñaña, Carapongo, Santa Clara, Campoy, Malecón Checa y Av. Nestor Gambetta. "Diario El Comercio. Todos los derechos reservados".</p>

      <ImageList imagenes={ciclonYakuImgs} />
    </section>
  );
}
export default CiclonYaku;
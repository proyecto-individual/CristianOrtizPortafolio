import ProyectoDescripcion from "./ProyectoDescripcion";
import GaleriaImagenes from "./GaleriaImagenes";

function Proyectos() {

  const jaraImgs = [
    'COVER.jpg',
    '02.jpg',
    '04.jpg',
    '08.jpg',
    '05.jpg',
    'IMG_1752.jpg',
    '10.jpg',
    '03.jpg',
    '09.jpg',
    '15.jpg',
    '14.jpg',
    '_MG_5517.jpg',
  ].map(img => `/img/proyectos/jara/${img}`);

  const sincretismoImgs = [
    '_MG_2160.jpg',
    '_MG_4500-7.jpg',
    '_MG_1840.jpg',
    '_MG_1930.jpg',
    '_MG_2043.jpg',
    '_MG_2034.jpg',
    '_MG_1938.jpg',
    '_MG_2240.jpg',
    '_MG_2022.jpg',
  ].map(img => `/img/proyectos/tradicion-sincretismo/${img}`);

  return (
    <div className="proyectos">
      <h1 className="proyecto-titulo marginBottom">Proyectos</h1>
      <div className="contenido-proyecto">
        <div className="proyecto-item">
          <ProyectoDescripcion
            titulo="JARA"
            resumen="Artilugio cimental de la mujer originaria."
            descripcion={`“La he visto arropar a sus hijos sobre las nubes e Hilar las nubes con manos de araña”. Este proyecto fotográfico abarca la importancia de la qara (pellejo de ovino) como artilugio de la mujer campesina, la deconstrucción  de materiales naturales como la qara a posibilitado durante décadas la sostenibilidad económica y la protección de sus consanguíneos ante extremas temperaturas bajas. Mi cercanía hacia las familias campesinas me ha permitido narrar con imágenes bajo una perspectivas intima la importancia de este material, la qara vive en cada mujer de estas tierras, en cada madre originaria de identidad genuina
              y en cada niño que juega con su madre, la qara es un símbolo de resistencia y lucha por la vida.`} />
          <GaleriaImagenes imagenes={jaraImgs} />
        </div>
        <div className="proyecto-item">
          <ProyectoDescripcion
            titulo="Una tradición de sincretismo en los pueblos andinos"
            resumen="Este proyecto fotográfico de corte documental, abarca cierta tradición milenaria de culto en los pueblos andinos."
            descripcion={`La tantawawa(pan bebé) una especie de pan de trigo divinizado, producidas por familias al sur del Perú, a inicios  de noviembre por el día de los  muertos. Como si se tratara de una especie de porta voz hacia los mundos de los espíritus, la tantawawa un ejemplo de sincretismo  de los pueblos antiguos, que a permitido preservar sus tradiciones mágico religiosos actuando como medio para establecer una conexión divina entre los vivos y muertos y a su vez como un símbolo de resistencia cultural. Este proyecto busca visibilizar la importancia de esta tradición en la vida cotidiana de los pueblos andinos, así como su significado espiritual y cultural.`} />
          <GaleriaImagenes imagenes={sincretismoImgs} />
        </div>
      </div>
    </div>
  )
}
export default Proyectos;


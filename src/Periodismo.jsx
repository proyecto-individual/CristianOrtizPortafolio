import GaleriaImagenes from "./GaleriaImagenes";

function Periodismo() {
  const cayara36Imgd = [
    '_MG_1135-2.jpg',
    '_MG_1170.jpg',
    '_MG_1174.jpg',
    '_MG_1239.jpg',
    '_MG_1283.jpg',
    '_MG_1320.jpg',
    '_MG_1371-2.jpg',
    '_MG_1398.jpg',
    '_MG_1423.jpg',
  ].map(img => `/img/periodismo/ayacucho-cayara/36 AÑOS DESPUES/${img}`);

  const cayaraTestimonioJuanaImgs = [
    '_MG_7989-2.jpg',
    '_MG_8007-2.jpg',
    '_MG_8019-3.jpg',
    '_MG_8029-4.jpg',
    '_MG_8051-2.jpg',
    '_MG_8248-2.jpg',
    '_MG_8251.jpg',
    '_MG_8329.jpg'
  ].map(img => `/img/periodismo/ayacucho-cayara/CAYARA TESTIMONIOS/juanaapari/${img}`);

  const cayaraTestimonioAvelinaImgs = [
    '_MG_7885.jpg',
    '_MG_7894-2.jpg',
    '_MG_7904-3.jpg',
    '_MG_7929.jpg',
    '_MG_7946-3.jpg',
    '_MG_7961-2.jpg',
    '_MG_7968.jpg',
    '_MG_8115-2.jpg'
  ].map(img => `/img/periodismo/ayacucho-cayara/CAYARA TESTIMONIOS/avelinatello/${img}`);

  const cayaraConmemoracionImgs = [
    'SaveClip.App_445242436_791214519804184_5255127042892756951_n.jpg',
    'SaveClip.App_445556534_1141270073774470_59776293952468177_n.jpg',
    'SaveClip.App_445568232_432327032874490_2893655225504825791_n.jpg',
    'SaveClip.App_445569310_854942609806659_3094790320622412087_n.jpg',
    'SaveClip.App_445569599_442416945051832_5674654758725416410_n.jpg',
    'SaveClip.App_445580412_1626175438143442_3797167683125522111_n.jpg',
    'SaveClip.App_445587903_1202245061151701_8714200687318582370_n.jpg',
    'SaveClip.App_445594084_822369535902805_5750914315805096438_n.jpg',
    'SaveClip.App_445674958_768641108723468_3964174446516449061_n.jpg',
    'SaveClip.App_445745650_3674767659519060_9077947419447616919_n.jpg',
    'SaveClip.App_445800129_756566053272449_8428213445374251743_n.jpg',
    'SaveClip.App_445811012_905979197966396_2549500223219601840_n.jpg'
  ].map(img => `/img/periodismo/ayacucho-cayara/CONMEMORACION CAYARA/${img}`);

  const cayaraSantuarioImgs = [
    'SaveClip.App_445556374_1095648498206493_499865990452168840_n.jpg',
    'SaveClip.App_445556931_1899476263826036_2372735277884678201_n.jpg',
    'SaveClip.App_445568239_7534126376672992_5132676906252980987_n.jpg',
    'SaveClip.App_445569582_3368529746782623_317640463395458758_n.jpg',
    'SaveClip.App_445581210_1586527458747137_8029464295514923125_n.jpg',
    'SaveClip.App_445602007_1014651937040862_1769144741978885962_n.jpg',
    'SaveClip.App_445615905_1337450154324599_2746839833116423116_n.jpg'
  ].map(img => `/img/periodismo/ayacucho-cayara/SANTUARIO DE LA MEMORIA/${img}`);

  const ciclonYakuImgs = [
    '_MG_9618.jpg',
    '_MG_9693.jpg',
    '_MG_9720.jpg',
    '_MG_9746.jpg',
    '_MG_9751.jpg',
    '_MG_9763.jpg',
    '_MG_9790.jpg',
    '_MG_9844.jpg',
    '_MG_9846.jpg',
    '_MG_9851.jpg',
    '_MG_9857.jpg',
    '_MG_9869-2.jpg',
    '_MG_9874-2.jpg',
    '_MG_9896.jpg',
    '_MG_9903.jpg',
    '_MG_9941.jpg',
    '_MG_9981.jpg',
  ].map(img => `/img/periodismo/ciclon-yaku/${img}`);

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

  const mujerTrabajadoraImgs = [
    'IMG_6866-2.jpg',
    'IMG_6868.jpg',
    'IMG_6915-2.jpg',
    'IMG_7019-2.jpg',
    'IMG_7065-4.jpg',
    'IMG_7088-2.jpg',
    'IMG_7100-2.jpg',
    'IMG_7124.jpg',
    'IMG_7170-3.jpg'
  ].map(img => `/img/periodismo/mujer-trabajadora/DIA DE LA MUJER/${img}`);

  const mujerTrabajadora2Imgs = [
    'IMG_7592.jpg',
    'IMG_7605.jpg',
    'IMG_7625.jpg',
    'IMG_7653.jpg',
    'IMG_7663.jpg',
    'IMG_7687.jpg',
    'IMG_7715.jpg',
    'IMG_7812.jpg',
    'IMG_7882.jpg',
    'IMG_7892.jpg',
    '_MG_0908.jpg',
    '_MG_0920.jpg'
  ].map(img => `/img/periodismo/mujer-trabajadora/DIA DE LA MUJER 2/${img}`);
  
  const vencedoresAyacuchoImgs = [
    'IMG_8154.jpg',
    'IMG_8185.jpg',
    'IMG_8225.jpg',
    'IMG_8254.jpg',
    'IMG_8279.jpg',
    'IMG_8321.jpg',
    'IMG_8327.jpg',
    'IMG_8358.jpg',
    'IMG_8388.jpg',
    'IMG_8401.jpg',
    'IMG_8413.jpg'
  ].map(img => `/img/periodismo/vencedores de ayacucho/${img}`);


  return (
    <div>
      <section class="periodismo">
        <h1 class="titulo-seccion">Periodismo</h1>

        <div class="proyecto-periodismo">
          <div class="proyecto-texto">
            <h2>AYACUCHO,CAYARA</h2>
            <ul>
              <li>36 años después de la masacre en CAYARA</li>
              <li>Testimonios del genocidio de CAYARA</li>
              <li>Conmemoración del genocidio de CAYARA</li>
              <li>Santuario de la memoria</li>
            </ul>
          </div>
          {/* <GaleriaImagenes imagenes={cayara36Imgd} />
          <GaleriaImagenes imagenes={cayaraTestimonioJuanaImgs} />
          <GaleriaImagenes imagenes={cayaraTestimonioAvelinaImgs} />
          <GaleriaImagenes imagenes={cayaraConmemoracionImgs} />
          <GaleriaImagenes imagenes={cayaraSantuarioImgs} />
          <GaleriaImagenes imagenes={ciclonYakuImgs} />
          <GaleriaImagenes imagenes={comunidadCatagalloImgs} />
          <GaleriaImagenes imagenes={foroApecImgs} />
          <GaleriaImagenes imagenes={justiciaDignidadImgs} />
          <GaleriaImagenes imagenes={mujerTrabajadoraImgs} />
          <GaleriaImagenes imagenes={mujerTrabajadora2Imgs} />
          <GaleriaImagenes imagenes={vencedoresAyacuchoImgs} /> */}
          <div class="proyecto-galeria">
            <img src="/img/periodismo/ayacucho-cayara/36 AÑOS DESPUES/_MG_1135-2.jpg" alt="Cayara 1" />
            <img src="/img/periodismo/ayacucho-cayara/CONMEMORACION CAYARA/SaveClip.App_445556534_1141270073774470_59776293952468177_n.jpg" alt="Cayara 2" />
            <img src="/img/periodismo/ayacucho-cayara/SANTUARIO DE LA MEMORIA/SaveClip.App_445602007_1014651937040862_1769144741978885962_n.jpg" alt="Cayara 3" />
          </div>
        </div>

        <div class="proyecto-periodismo invertido">
          <div class="proyecto-texto">
            <h2>Foro del APEC y marcha en el Perú</h2>
            <p>Cientos de ciudadanos de diferentes gremios como transporte, comercio y universidades se reunieron en el cruce de las Av. Aviación y Canadá, cerca a la sede la APEC 2024 para exigir la derogación de la Ley 32108 (Ley contra el crimen organizado), archivamiento del proyecto de ley relacionado con el Terrorismo Urbano y mayor énfasis en la lucha por la seguridad ciudadana.</p>
          </div>
          <div class="proyecto-galeria">
            <img src="/img/periodismo/foro-apec/_MG_0674.jpg" alt="Apec 1" />
            <img src="/img/periodismo/foro-apec/_MG_1043.jpg" alt="Apec 2" />
            <img src="/img/periodismo/foro-apec/_MG_0511.jpg" alt="Apec 3" />
          </div>
        </div>

        <div class="proyecto-periodismo">
          <div class="proyecto-texto">
            <h2>Vencedores de ayacucho</h2>
            <p>Patrimonio Cultural de la Nación.</p>
            <p>El último domingo 30 de Marzo se celebró el Carnaval "Vencedores de Ayacucho" donde diferentes instituciones provinciales de Ayacucho participaron del evento en la iconica plaza de Acho.</p>
            <p>El tradicional carnaval Vencedores de Ayacucho, Patrimonio Cultural de la Nación, organizado por la Federación de Instituciones Provinciales de Ayacucho (Fedipa), el objetivo del carnaval Vencedores de Ayacucho 2025 “sigue siendo mantener la tradición, con sus diferentes costumbres y vestimentas, así como transmitir de generación en generación la autenticidad de cada pueblo de las 11 provincias que forman la región de Ayacucho”.</p>
          </div>
          <div class="proyecto-galeria">
            <img src="/img/periodismo/vencedores de ayacucho/IMG_8413.jpg" alt="Vencedores 1" />
            <img src="/img/periodismo/vencedores de ayacucho/IMG_8321.jpg" alt="Vencedores 2" />
            <img src="/img/periodismo/vencedores de ayacucho/IMG_8388.jpg" alt="Vencedores 3" />
          </div>
        </div>

        <div class="proyecto-periodismo invertido">
          <div class="proyecto-texto">
            <h2>CICLON YAKU, LIMA ESTE</h2>
            <p>El ciclón Yaku se desarrolló frente a las costas peruanas y se movió hacia el interior, generando condiciones ideales para las lluvias intensas debido a la combinación de temperatura y humedad. Este fenómeno climático, que se considera inusual para la zona, causó daños significativos, incluyendo la pérdida de vidas y la afectación de miles de personas y viviendas.</p>
            <p>A causa de los huaycos, cientos de familias de Lurigancho (Chosica) han tenido muchas pérdidas materiales. El agua del huaico ingresó a sus casas, e incluso algunos hogares fueron completamente destruidos. Los ciudadanos de esta localidad intentan rescatar algunas de sus pertenencias, y acomodan bolsas de tierra con la esperanza de disminuir el efecto de los deslizamientos en los siguientes días. Muchos denunciaron la ausencia de las autoridades ante esta situación, pues, hasta el momento en el que estas fotos fueron capturadas, ninguna entidad estatal acudió a socorrerlos u ofrecerles dónde quedarse.</p>
            <p>Los distritos afectados por el desborde fueron, Chaclacayo, Huachipa, Ñaña, Carapongo, Santa Clara, Campoy, Malecón Checa y Av. Nestor Gambetta. "Diario El Comercio. Todos los derechos reservados”.</p>
          </div>
          <div class="proyecto-galeria">
            <img src="/img/periodismo/ciclon-yaku/_MG_9846.jpg" alt="Ciclon 1" />
            <img src="/img/periodismo/ciclon-yaku/_MG_9844.jpg" alt="Ciclon 2" />
            <img src="/img/periodismo/ciclon-yaku/_MG_9896.jpg" alt="Ciclon 3" />
          </div>
        </div>

        <div class="proyecto-periodismo">
          <div class="proyecto-texto">
            <h2>La comunidad indígena Shipibo-Konibo de Cantagallo</h2>
            <p>Las prácticas y los conocimientos de la comunidad de los shipibos-konibos de Cantagallo, Lima, fueron declarados de interés nacional, a través de una ley dada por el Congreso de la República. El objetivo de ello es “salvaguardar y fortalecer su idioma, arte, prácticas y conocimientos; así como sus normas internas referidas a la convivencia”.</p>
          </div>
          <div class="proyecto-galeria">
            <img src="/img/periodismo/comunidad-cantagallo/IMG_7524.jpg" alt="Cantagallo 1" />
            <img src="/img/periodismo/comunidad-cantagallo/IMG_7384.jpg" alt="Cantagallo 2" />
            <img src="/img/periodismo/comunidad-cantagallo/IMG_7202.jpg" alt="Cantagallo 3" />
          </div>
        </div>

        <div class="proyecto-periodismo invertido">
          <div class="proyecto-texto">
            <h2>Día Internacional de la Mujer Trabajadora</h2>
            <p>Miles de mujeres marcharon por las calles del centro histórico de Lima y de distintas ciudades del país para reivindicar sus derechos y exigir el fin de la violencia machista. Portando carteles con frases como "Vivas nos queremos", "Juntas sin miedo" y "La sangre derramada jamás será olvidada", colectivos feministas y civiles, así como federaciones de estudiantes, recorrieron las avenidas Abancay, Nicolás de Piérola, Tacna y otras, demandando igualdad plena en todos los niveles (político, económico, jurídico y de género) y justicia para las mujeres.</p>
          </div>
          <div class="proyecto-galeria">
            <img src="/img/periodismo/mujer-trabajadora/DIA DE LA MUJER/IMG_7019-2.jpg" alt="Marcha 1" />
            <img src="/img/periodismo/mujer-trabajadora/DIA DE LA MUJER 2/IMG_7592.jpg" alt="Marcha 2" />
            <img src="/img/periodismo/mujer-trabajadora/DIA DE LA MUJER/IMG_7088-2.jpg" alt="Marcha 3" />
          </div>
        </div>

        <div class="proyecto-periodismo">
          <div class="proyecto-texto">
            <h2>Marcha “Por la Justicia y la Dignidad”</h2>
            <p>Segundo día de marcha contra el gobierno de Dina Baluarte. Cientos de Peruanos de distintas regiones del país se congregaron en manifestación pacífica por acecinados y víctimas del 2022 – 2023.</p>
          </div>
          <div class="proyecto-galeria">
            <img src="/img/periodismo/justicia-dignidad/_MG_6514.jpg" alt="Cayara 1" />
            <img src="/img/periodismo/justicia-dignidad/IMG_6153.jpg" alt="Cayara 2" />
            <img src="/img/periodismo/justicia-dignidad/IMG_6260.jpg" alt="Cayara 3" />
          </div>
        </div>

      </section>


    </div>
  );
}
export default Periodismo;
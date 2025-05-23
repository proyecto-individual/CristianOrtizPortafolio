import ImageList from "./ImageList";

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

function CayaraAyacucho() {
  return (
    <section className="justicia-wrapper" >
      <h1>AYACUCHO, CAYARA</h1>
      <div>
        <h2>36 años después de la masacre en cayara</h2>
        <p>Más de tres décadas después, los familiares de Solano Ccayo Noa (29), víctima de la masacre de Cayara, recibieron partes de sus restos óseos que fueron encontrados en una fosa clandestina, en Llulluchapampa de San Pedro de Hualla – Ayacucho. Este jueves 21 de noviembre, la Quinta Fiscalía Penal Supraprovincial Especializada en Derechos Humanos e Interculturalidad de Ayacucho, restituyo a sus familiares, algunos restos óseos, luego de haber sido identificado el fragmento por el Equipo Forense Especializado (EFE) del Ministerio Público.El viernes pasado 22 de noviembre del 2024, los familiares de víctima dieron digna sepultura a víctima después de 36 años del genocidio ocurrido en Cayara, Ayacucho.</p>
        <ImageList imagenes={cayara36Imgd} />
      </div>
      <div>
        <h2>Testimonio del genocidio de CAYARA</h2>
        <div>
          <h3>Juana Apari</h3>
          <p>En el año 2024, se retrató a  Juana Apari sobrevivientes de la masacre de Cayara (Ayacucho, 14 de mayo de 1988). En el mencionado caso, muchas personas fueron desaparecidas y otras ejecutadas. una experiencia traumática, respecto de la cual pueden existir sentimientos de dolor, angustia, miedo, silenciamiento, rabia, frustración. Entre las víctimas se encuentran el esposo de Juana Apari.</p>
          <ImageList imagenes={cayaraTestimonioJuanaImgs} />
        </div>
        <div>
          <h3>Avelina Tello</h3>
          <p>En el año 2024, se retrató a Avelina Tello Palomino sobrevivientes de la masacre de Cayara (Ayacucho, 14 de mayo de 1988). En el mencionado caso, muchas personas fueron desaparecidas y otras ejecutadas. una experiencia traumática, respecto de la cual pueden existir sentimientos de dolor, angustia, miedo, silenciamiento, rabia, frustración. Entre las víctimas se encuentran el esposo e hijo de Tello Palomino</p>
          <ImageList imagenes={cayaraTestimonioAvelinaImgs} />
        </div>
      </div>
      <div>
        <h2>CONMEMORACION DEL GENOCIDIO DE CAYARA</h2>
        <p>El genocidio en Cayara ocurrió el 14 de mayo de 1988 a manos de militares del Ejército durante el Conflicto Armado Interno, esto en represalia a un atentado por parte de elementos del PCP-SL. Producto de la incursión militar, se tuvo el saldo de 29 víctimas mortales, 1 en la zona de ingreso al Cayara, 5 al interior de la iglesia y 23 en Ccechua mientras hacían labores agrícolas, todos quechuas hablantes y campesinos.</p>
        <p>En agosto del año pasado, la Cuarta Sala Penal Superior Nacional reconoció oficialmente el año pasado, la existencia de la masacre de Cayara, ocurrida el 14 de mayo de 1988, así como el asesinato y desaparición de testigos en junio y diciembre del mismo año. Sentencia en la cual se condenó a las patrullas militares que participaron en dichos actos.</p>
        <p>A 36 años de lo ocurrido en Cayara, el pasado 13 y 14 de mayo en la plaza principal de Cayar se conmemoró a las víctimas de este genocidio con diferentes ceremonias como la reiniciación de la procesión de la Virgen de Fátima en Cayara</p>
        <ImageList imagenes={cayaraConmemoracionImgs} />
      </div>
      <div>
        <h2>SATUARIO DE LA MEMORIA</h2>
        <p>Santuario ecológico de la memoria denominado en quechua Kuyasqanchikuna yuyanapag.</p>
        <p>Lugar donde los familiares vieron por ultima vez los cuerpos sin vida de sus consanguíneos, víctimas de la masacre del 14 de mayo de 1988 a manos de militares del ejercito durante el Conflicto armado interno son las siguientes: Humberto Ipurre Bautista, Santiago Tello Crisóstomo, Aurelio Palomino Choccña, Julia Crisante Palomino, Esteban Asto Palomino, Emilio Berrocal Crisóstomo, Patricio Ccayo Cahuaymi, Teodosio Noa Pariona, Indalecio Palomino Tueros, David Ccayo Cahuaymi, Solano Ccayo Noa, José Ccayo Rivera, Alejandro Chocña Ore, Artemio González Palomino, Ignacio Ipurre Suarez, Eustaquio Ore Palomino, Zacarías Palomino Bautista, Aurelio Palomino Choccña, Fidel Teodosio Palomino Suárez, Félix Quispe Palomino, Dionisio Suárez Palomino, Emiliano Sulca Ore, Ignacio Tarqui Ccayo, Hermenegildo Apari Tello, Alejandro Echaccaya Villagaray, Samuel García Palomino, Jovita García Suárez, Justiniano Tinco García, Fernandina Palomino Quispe, Magdaleno Gutierrez Huamán, Segundina Marcatoma Suárez, Gregorio Ipurre Ramos, Guzmán Bautista Palomino, Catalina Ramos Palomino, Benedicta Palomino de Ipurre, Antonio Felix García Tipe, Martha Crisóstomo García, Apolinario Quispe, Magalino Gutierrez Huamán.</p>
        <ImageList imagenes={cayaraSantuarioImgs} />
      </div>

    </section>
  )

}
export default CayaraAyacucho;


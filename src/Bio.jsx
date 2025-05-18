import './App.css';
import './index.css';


const imagenes =[
  'SaveClip.App_445242436_791214519804184_5255127042892756951_n.jpg',
  'SaveClip.App_445556534_1141270073774470_59776293952468177_n.jpg'
]
function Bio(){
  return(
    <div className="main-bio">
      <h1>Bio</h1>
      <p>Hola, soy Cristian Ortiz Sanchez, fotógrafo y periodista peruano. Me apasiona capturar momentos únicos y contar historias a través de mis imágenes. He trabajado en diversos proyectos que van desde el fotoperiodismo hasta la fotografía de deportes y retratos.</p>
      <p>Mi objetivo es transmitir emociones y realzar la belleza de la vida cotidiana a través de mi lente. Estoy siempre en busca de nuevas oportunidades para aprender y crecer como fotógrafo.</p>
      <div>
        <img 
        src={imagen1} 
        alt="Imagen de Bio" 
        style={{width: '500px', height: 'auto'}} />
      </div>
      <div>
        {imagenes.map((imagen, index) => (
          <img 
          key={index} 
          src={`/CASO CAYARA/CONMEMORACION CAYARA/${imagen}`} 
          alt={`Imagen ${index + 1}`} 
          style={{width: '500px', height: 'auto'}} />
        ))}
      </div>


    </div>
  )
}
export default Bio;
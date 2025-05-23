import './App.css';
import './index.css';
import './Bio.css';
import Section from './bio/componentes/Section';
import ContactInfoItem from './bio/ContactInfoItem';
import ProfileImage from './bio/ProfileImage';
import JobEntry from './bio/JobEntry'; // Nuevo
import EducationEntry from './bio/EducationEntry'; // Nuevo
import InternshipEntry from './bio/InternshipEntry'; // Nuevo

const imagenes =[
  'SaveClip.App_445242436_791214519804184_5255127042892756951_n.jpg',
  'SaveClip.App_445556534_1141270073774470_59776293952468177_n.jpg'
]
console.log("🚀 ~ imagenes:", imagenes)
function Bio(){
  return(
    <div className="main-bio">

       {/* Sección de Resumen */}
       <ProfileImage />

       <div className="cv-content-columns"> {/* Contenedor para las dos columnas */}
        {/* Columna Izquierda */}
        <div className="left-column">
          <main className="cv-main-content">
            {/* Sección de Resumen */}
            <Section icon="📄" title="Resumen">
              <p>¡Hola! Soy Cristhian, un apasionado estudiante de Dirección de Artes y Fotografía.</p>
              <p>Me dedico a dar vida a ideas a través de proyectos visuales y edición. Con cuatro años de experiencia en este fascinante sector</p>
              <p>Mi viaje en la fotografía y el vídeo comenzó como una pasión y se ha convertido en mi especialidad. A lo largo de este tiempo, he cultivado habilidades en la captura de imágenes y vídeos de alta calidad, dominado el arte de la edición (tanto visual como de sonido) y perfeccionado la gestión de proyectos desde la concepción hasta la entrega. Creo firmemente que mi compromiso con el trabajo en equipo y mi meticulosa atención a cada detalle son fundamentales para transformar visiones en realidades exitosas.</p>
            </Section>

            {/* Sección de Datos Personales */}
            <Section icon="🧑‍💻" title="Datos Personales">
              <ContactInfoItem icon="💳" text="48463709" />
              <ContactInfoItem icon="📍" text="Viña San Francisco - Santa Anita - Lima" />
              <ContactInfoItem icon="📞" text="927932694" />
              <ContactInfoItem icon="📱" text="+51927932694" />
              <ContactInfoItem icon="📧" text="crisander_helow@hotmail.com" />
            </Section>

            {/* Sección Web & Redes */}
            <Section icon="🌐" title="Web & Redes">
              <ContactInfoItem icon="📱" text="+51927932694" />
              <ContactInfoItem icon="📷" text={<a href="https://www.instagram.com/poorstreet.peru" target="_blank" rel="noopener noreferrer">Instagram: poorstreet.peru</a>} />
            </Section>

            {/* Sección de Conocimientos */}
            <Section icon="💡" title="Conocimientos">
              <ul>
                <li>Diseño Digital</li>
                <li>Marketing directo</li>
                <li>Fotografía</li>
                <li>Planificación de Proyectos</li>
              </ul>
            </Section>
          </main>
        </div>

        {/* Columna Derecha */}
        <div className="right-column">
          {/* Sección de Experiencia Laboral */}
          <Section icon="💼" title="Experiencia laboral">
            <JobEntry
              dates="Julio de 2022 - Actualmente"
              company="Productora 'La Ceguera Foto'"
              role="PRODUCTOR, ASISTENTE DE CÁMARA | Fotografía y videografía | Planificación de Proyectos"
              responsibilities={[
                "Control y lectura de esquema de fuentes de iluminación y asistencia de operador en cámara fotográfica.",
              ]}
              projects={[
                { client: "Ambassade de France au Perou", description: "Documental. Piscicultura sostenible." },
                { client: "Minsur", description: "Documental sobre la contaminación y escasez del agua en Puno." },
                { client: "Banco financiero BCP", description: "Producción y realización de banco de fotografías publicitarias." },
                { client: "Glirica Internacional", description: "Realización de videos institucionales de diferentes especialidades de la clínica." },
              ]}
            />
            <JobEntry
              dates="Mayo de 2015 - Junio de 2022"
              company="Oechsle I.R.L"
              role="VISUAL MERCHANDISING | Decorador Senior"
              responsibilities={[
                "Diseño Digital",
                "Marketing directo",
                "Diseño de logotipos, decoración y fotografía.",
              ]}
              projects={[]} // No hay proyectos listados en el CV para este puesto
            />
          </Section>

          {/* Sección de Estudios Avanzados */}
          <Section icon="🎓" title="Estudios Avanzados">
            <EducationEntry
              dates="Marzo de 2021 - Actualmente"
              institution="En Centro de la Imagen"
              location="Lima, Lima, Perú"
              title="DIRECTOR EN ARTES Y FOTOGRAFÍA"
              status="CURSANDO"
              years="3/4"
            />
          </Section>

          {/* Sección de Prácticas en Prensa */}
          <Section icon="📰" title="Prácticas en Prensa">
            <InternshipEntry
              dates="Octubre de 2022 - Actualmente"
              organization="RED FOF"
              description="Asociación de fotógrafos independientes que defienden los Derechos humanos."
              coverages={[
                "Protesta contra el gobierno de Dina Baluarte",
                "Lluvias y Huaycos en el Perú.",
              ]}
            />
          </Section>
        </div>
      </div>

    </div>
  )
}
export default Bio;
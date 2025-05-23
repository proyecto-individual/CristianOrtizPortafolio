const ProyectoPeriodismo = ({ titulo, descripcion, lista, imagenes, invertido = false }) => {
  return (
    <div className={`proyecto-periodismo ${invertido ? "invertido" : ""}`}>
      <div className="proyecto-texto">
        <h2>{titulo}</h2>
        {lista && (
          <ul>
            {lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {descripcion &&
          descripcion.map((p, index) => <p key={index}>{p}</p>)
        }
      </div>
      <div className="proyecto-galeria">
        {imagenes.map((src, index) => (
          <img key={index} src={src} alt={`${titulo} ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default ProyectoPeriodismo;

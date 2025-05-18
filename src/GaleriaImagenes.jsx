function GaleriaImagenes({ imagenes }) {
  return (
    <div className="proyecto-imagenes">
      {imagenes.map((src, i) => (
        <img key={i} src={src} alt={`Imagen ${i + 1}`} className="proyecto-img" />
      ))}
    </div>
    
  );
}
export default GaleriaImagenes;

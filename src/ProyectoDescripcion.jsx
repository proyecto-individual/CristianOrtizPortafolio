function ProyectoDescripcion({ titulo, resumen, descripcion }) {
  return (
    <div className="proyecto-descripcion">
      <h2 className="titulo">{titulo}</h2>
      <p><strong>{resumen}</strong></p>
      <p>{descripcion}</p>
    </div>
  );
}
export default ProyectoDescripcion;
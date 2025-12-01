import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api/api";

export default function DetalleUsuario() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    API.get(`/usuarios/${id}`).then((res) => setUsuario(res.data));
  }, [id]);

  if (!usuario) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Detalle del Usuario</h2>
      <p>
        <strong>Nombre:</strong> {usuario.nombre}
      </p>
      <p>
        <strong>Email:</strong> {usuario.email}
      </p>
      <p>
        <strong>Rol:</strong> {usuario.rol}
      </p>
    </div>
  );
}

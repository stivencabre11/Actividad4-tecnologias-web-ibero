import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { API } from "../api/api";
import { UserContext } from "../context/UserContext";

export default function ListaUsuarios() {
  const { usuarios, setUsuarios } = useContext(UserContext);

  useEffect(() => {
    API.get("/usuarios").then((res) => setUsuarios(res.data));
  }, [setUsuarios]);

  return (
    <div>
      <h2>Usuarios registrados</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            <Link to={`/usuario/${u.id}`}>{u.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

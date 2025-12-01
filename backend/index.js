const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [
  { id: 1, nombre: "Ana Torres", email: "ana@example.com", rol: "Admin" },
  { id: 2, nombre: "Carlos Pérez", email: "carlos@example.com", rol: "Usuario" },
  { id: 3, nombre: "María Gómez", email: "maria@example.com", rol: "Editor" },
];

app.get("/api/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/api/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id == req.params.id);
  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
  res.json(usuario);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend en puerto ${PORT}`);
});

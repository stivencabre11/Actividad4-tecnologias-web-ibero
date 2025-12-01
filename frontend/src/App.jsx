import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import ListaUsuarios from "./components/ListaUsuarios";
import DetalleUsuario from "./components/DetalleUsuario";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />} />
          <Route path="/usuario/:id" element={<DetalleUsuario />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

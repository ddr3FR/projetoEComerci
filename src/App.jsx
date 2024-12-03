import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Pedidos from "./components/Pedidos";
import ListaPedidos from "./components/ListaPedidos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Pedidos" element={<Pedidos />} />
        <Route path="/ListaPedidos" element={<ListaPedidos />} />
      </Routes>
    </Router>
  );
}

export default App;

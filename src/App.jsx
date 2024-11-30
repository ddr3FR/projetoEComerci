import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;

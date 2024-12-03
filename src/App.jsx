import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import CadastrarProdutos from "./components/CadastrarProdutos";
import ListaProdutos from "./components/ListaProdutos"; // Importar o componente ListaProdutos

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto" element={<CadastrarProdutos />} />
        <Route path="/procura" element={<ListaProdutos />} />
      </Routes>
    </Router>
  );
}

export default App;

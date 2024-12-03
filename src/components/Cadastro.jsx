import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom"; 

const Cadastro = () => {
  const [dados, setDados] = useState({
    nome: "",
    cpf: "",
    cep: "",
    telefone: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  const navigate = useNavigate(); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  const handleCadastro = async (e) => {
    e.preventDefault(); 


    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        navigate("/"); 
      } else {
        throw new Error("Erro no cadastro");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar o cadastro, tente novamente mais tarde.");
      navigate("/cadastro"); 
    }
  };

  return (
    <div>
      <NavBar />
      <div
        className="d-flex justify-content-center align-items-start"
        style={{
          marginTop: "50px",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <div className="p-5 bg-white shadow rounded" style={{ width: "600px" }}>
          <h2 className="text-center mb-4">Cadastro</h2>
          <form onSubmit={handleCadastro}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  value={dados.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="cpf" className="form-label">
                  CPF
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cpf"
                  name="cpf"
                  value={dados.cpf}
                  onChange={handleChange}
                  placeholder="Digite seu CPF"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="cep" className="form-label">
                  CEP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cep"
                  name="cep"
                  value={dados.cep}
                  onChange={handleChange}
                  placeholder="Digite seu CEP"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="telefone" className="form-label">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefone"
                  name="telefone"
                  value={dados.telefone}
                  onChange={handleChange}
                  placeholder="Digite seu telefone"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={dados.email}
                  onChange={handleChange}
                  placeholder="Digite seu email"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="senha" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  name="senha"
                  value={dados.senha}
                  onChange={handleChange}
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="confirmaSenha" className="form-label">
                  Confirme sua Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmaSenha"
                  name="confirmaSenha"
                  value={dados.confirmaSenha}
                  onChange={handleChange}
                  placeholder="Confirme sua senha"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Cadastrar
            </button>
          </form>

          <div className="text-center mt-3">
            <small>
              Já possui uma conta?{" "}
              <a href="/login" className="text-primary">
                Faça login
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

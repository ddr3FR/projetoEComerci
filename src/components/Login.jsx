import React, { useState } from "react";
import NavBar from "./NavBar";
import { handleLogin } from "../services/loginService"; 

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sucesso = await handleLogin(cpf, senha);

    if (!sucesso) {
      setError("CPF ou Senha incorretos.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <NavBar />

      <div
        className="d-flex justify-content-center align-items-start"
        style={{
          marginTop: "80px",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <div className="p-5 bg-white shadow rounded" style={{ width: "350px" }}>
          <h2 className="text-center mb-4">Login</h2>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">
                CPF
              </label>
              <input
                type="text"
                className="form-control"
                id="cpf"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <small>
              Ainda não é nosso cliente?{" "}
              <a href="/cadastro" className="text-primary">
                Cadastre-se
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

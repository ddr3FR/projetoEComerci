import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            CatTintas
          </Link>

          <form className="d-flex mx-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>

          <div className="text-end">
            <Link to="/login" className="text-light text-decoration-none me-3">
              Login
            </Link>
            <Link to="/cadastro" className="text-light text-decoration-none me-3">
              Cadastro
            </Link>
            <div>
              
            </div>
            <Link to="/Produto" className="text-light text-decoration-none">
              Cadastrar Produtos
            </Link>
            <div>

            </div>
            <Link to="/Procura" className="text-light text-decoration-none">
              Lista produtos
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

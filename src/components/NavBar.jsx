import React from "react";
const NavBar = ()=>{
    return (
        <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            CatTintas
          </a>
         
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
            <a href="/login" className="text-light text-decoration-none me-3">
              Login
            </a>
            <a href="/cadastro" className="text-light text-decoration-none">
              Cadastro
            </a>
            <a href="/pedidos" className="text-light text-decoration-none ms-3">
              Pedidos
            </a>
            <a href="/listapedidos" className="text-light text-decoration-none ms-3">
              Listagem
            </a>
          </div>
        </div>
      </nav>
    </header>
    );
}

export default NavBar
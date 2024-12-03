import React, { useEffect, useState } from "react";

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  // Função para buscar os produtos
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("http://localhost:3001/produtos");
        if (response.ok) {
          const data = await response.json();
          setProdutos(data); // Define todos os produtos
          setProdutosFiltrados(data); // Inicializa os produtos filtrados
        } else {
          console.error("Erro ao buscar produtos:", response.status);
        }
      } catch (error) {
        console.error("Erro ao conectar à API:", error);
      }
    };

    fetchProdutos();
  }, []);

  // Filtrar produtos com base no termo de busca
  useEffect(() => {
    const filtrados = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setProdutosFiltrados(filtrados);
  }, [busca, produtos]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Produtos</h2>

      {/* Campo de busca */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o nome do produto para buscar..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* Lista de produtos */}
      <div className="row">
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="col-md-4 mb-4">
            <div className="card h-100">
              {produto.imagem && (
                <img
                  src={`http://localhost:3001/imagens/${produto.imagem}`}
                  className="card-img-top"
                  alt={produto.nome}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">{produto.descricao}</p>
                <p className="card-text">
                  <strong>Preço:</strong> R$ {produto.preco}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProdutos
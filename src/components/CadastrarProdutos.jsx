import React, { useState } from "react";

const CadastrarProdutos = () => {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    imagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProduto({ ...produto, imagem: file.name }); // Salvar o nome da imagem
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        setProduto({
          nome: "",
          descricao: "",
          preco: "",
          imagem: "",
        });
      } else {
        throw new Error("Erro ao cadastrar produto.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar produto.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Cadastrar Produtos</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome do Produto
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea
            className="form-control"
            id="descricao"
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="preco" className="form-label">
            Preço (R$)
          </label>
          <input
            type="number"
            className="form-control"
            id="preco"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imagem" className="form-label">
            Imagem do Produto
          </label>
          <input
            type="file"
            className="form-control"
            id="imagem"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastrarProdutos;

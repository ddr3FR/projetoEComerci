export const handleCadastro = async (dados) => {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
  
    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
    } else {
      alert("Erro no cadastro.");
    }
  };
  
export const handleLogin = async (cpf, senha) => {
    const response = await fetch("http://localhost:3001/users");
    const users = await response.json();
  
    const user = users.find((user) => user.cpf === cpf && user.senha === senha);
  
    if (user) {
      alert("Login realizado com sucesso!");
    } else {
      alert("CPF ou Senha incorretos.");
    }
  };
  
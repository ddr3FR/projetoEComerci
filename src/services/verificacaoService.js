export const verificarExistencia = async (cpf, email) => {
    try {
        const response = await fetch("http://localhost:3001/users");
    
        if (!response.ok) {
            throw new Error('Erro ao verificar dados no servidor.');
        }
    
        const users = await response.json();
        
        return users.some((user) => user.cpf === cpf || user.email === email);
    } catch (error) {
        console.error("Erro na verificação de existência: ", error);
        throw error; 
    }
  };
  
  export const handleCadastro = async (dados) => {
    try {
        const existe = await verificarExistencia(dados.cpf, dados.email);
    
        if (existe) {
            alert("CPF ou E-mail já cadastrado!");
            return;
        }
    
        const response = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
        });
    
        if (response.ok) {
            alert("Cadastro realizado com sucesso!");
        } else {
            throw new Error('Erro ao cadastrar usuário.');
        }
        } catch (error) {
        console.error("Erro no cadastro: ", error);
        alert("Houve um problema ao realizar o cadastro. Tente novamente mais tarde.");
    }
  };
  
  
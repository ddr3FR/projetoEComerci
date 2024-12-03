// pedidosService.js
export const cadastrarPedido = async (pedido) => {
    const response = await fetch("http://localhost:3001/pedidos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pedido),
    });

    if (!response.ok) {
        throw new Error("Erro ao cadastrar pedido");
    }

    return await response.json();
    
};
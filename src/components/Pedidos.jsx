import React, { useState } from 'react';
import { cadastrarPedido } from '../services/PedidosService';
import NavBar from './NavBar';

const Pedidos = () => {
    const [cliente, setCliente] = useState('');
    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [endereco, setEndereco] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pedido = {
            cliente,
            produto,
            quantidade,
            endereco,
        };

        try {
            const response = await cadastrarPedido(pedido, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(pedido),
              });
            console.log('Pedido cadastrado!', response);
            alert('Pedido cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar pedido:', error);
            alert('Erro ao cadastrar pedido.');
        }
    };

    return (
        <div>
            <NavBar />
            <h2>Cadastrar Pedido</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Cliente:</label>
                    <input
                        type="text"
                        value={cliente}
                        onChange={(e) => setCliente(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Produto:</label>
                    <input
                        type="text"
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        min="1"
                        required
                    />
                </div>
                <div>
                    <label>Endereço:</label>
                    <input
                        type="text"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar Pedido</button>
            </form>
        </div>
    );
};

export default Pedidos;
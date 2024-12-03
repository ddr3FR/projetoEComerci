import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';

const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch("http://localhost:3001/pedidos");
        if (!response.ok) {
          throw new Error('Erro ao buscar pedidos.');
        }
        const data = await response.json();
        setPedidos(data);
      } catch (error) {
        console.error("Erro ao buscar pedidos: ", error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div>
      <NavBar />
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Lista de Pedidos</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {pedidos.map((pedido) => (
            <li key={pedido.id} style={{ 
              background: '#f9f9f9', 
              margin: '10px 0', 
              padding: '10px', 
              borderRadius: '5px', 
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 
            }}>
              <p><strong>Cliente:</strong> {pedido.cliente}</p>
              <p><strong>Produto:</strong> {pedido.produto}</p>
              <p><strong>Quantidade:</strong> {pedido.quantidade}</p>
              <p><strong>Endereço:</strong> {pedido.endereco}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaPedidos;
const produtos = [
    { id: 1, nome: 'Produto A', precoCompra: 10, precoVenda: 20, quantidade: 100 },
    { id: 2, nome: 'Produto B', precoCompra: 15, precoVenda: 30, quantidade: 50 },
  ];
  
  const vendas = [
    { id: 1, produtoId: 1, quantidade: 2, data: '2024-09-25' }, 
    { id: 2, produtoId: 2, quantidade: 1, data: '2024-09-26' }, 
  ];
  
  module.exports = { produtos, vendas };
  
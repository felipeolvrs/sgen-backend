let produtos = [];

exports.consultarEstoque = (req, res) => {
  try {
    const estoqueConsolidado = produtos.map((produto) => ({
      nome: produto.nome,
      quantidade: produto.quantidade,
      localizacao: produto.localizacao,
    }));

    res.status(200).json(estoqueConsolidado);
  } catch (error) {
    res.status(500).json({ message: "Erro ao consultar estoque." });
  }
};

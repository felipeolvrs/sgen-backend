let produtos = [];

exports.atualizarEstoque = (req, res) => {
  const { produtoId, quantidade, acao } = req.body;

  try {
    const produto = produtos.find((p) => p.id === produtoId);
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    if (acao === "entrada") {
      produto.quantidade += quantidade;
    } else if (acao === "saida") {
      if (produto.quantidade < quantidade) {
        return res
          .status(400)
          .json({ message: "Quantidade insuficiente no estoque." });
      }
      produto.quantidade -= quantidade;
    } else {
      return res.status(400).json({ message: "Ação inválida." });
    }

    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar estoque." });
  }
};

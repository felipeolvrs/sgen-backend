let produtos = [];

function consultarEstoque(req, res) {
  try {
    res.status(200).json(produtos); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function sincronizar(req, res) {
  try {
    res
      .status(200)
      .json({ message: "Estoque sincronizado com sucesso", produtos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function atualizarEstoqueManualmente(req, res) {
  const { items, acao } = req.body;

  try {
    items.forEach((item) => {
      const produto = produtos.find((p) => p.id === item.id);
      if (produto) {
        if (acao === "entrada") {
          produto.quantidade += item.quantidade;
        } else if (acao === "saida") {
          if (produto.quantidade < item.quantidade) {
            throw new Error(
              `Quantidade insuficiente para o produto ${produto.nome}`
            );
          }
          produto.quantidade -= item.quantidade;
        }
      } else {
        throw new Error(`Produto com ID ${item.id} não encontrado.`);
      }
    });

    res
      .status(200)
      .json({ message: "Estoque atualizado com sucesso", produtos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { consultarEstoque, sincronizar, atualizarEstoqueManualmente };

const Produto = require("../models/Produto");

async function atualizarEstoque(itens, acao) {
  if (!["subtrair", "adicionar"].includes(acao)) {
    throw new Error(`Ação "${acao}" não reconhecida.`);
  }

  for (const itemAtual of itens) {
    const produto = await Produto.findByPk(itemAtual.produtoid);

    if (!produto) {
      throw new Error(`Produto com id ${itemAtual.produtoid} não encontrado.`);
    }

    if (acao === "subtrair") {
      produto.estoque -= itemAtual.quantidade;
    } else if (acao === "adicionar") {
      produto.estoque += itemAtual.quantidade;
    }

    if (produto.estoque < 0) {
      throw new Error(
        `Estoque insuficiente para o produto ${produto.nome}. Tentativa de subtrair: ${itemAtual.quantidade}`
      );
    }

    await produto.save();
  }
}

async function sincronizarEstoque() {
  const produtos = await Produto.findAll();

  return produtos.map((produto) => ({
    produtoId: produto.id,
    nome: produto.nome,
    quantidadeTotal: produto.estoque,
  }));
}

module.exports = { atualizarEstoque, sincronizarEstoque };

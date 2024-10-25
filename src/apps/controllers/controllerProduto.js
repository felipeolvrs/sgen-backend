let produtos = [];

exports.criarProduto = (req, res) => {
  try {
    const { nome, descricao, preco, estoque } = req.body;

    if (!nome || !preco || estoque === undefined) {
      return res
        .status(400)
        .json({ message: "Campos obrigatórios: nome, preço e estoque." });
    }

    const novoProduto = {
      id: Date.now(), // Gerando um ID único
      nome,
      descricao,
      preco,
      estoque,
    };

    produtos.push(novoProduto);
    return res.status(201).json(novoProduto);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return res.status(500).json({ message: "Erro ao criar produto." });
  }
};

exports.listarProdutos = (req, res) => {
  try {
    return res.status(200).json(produtos);
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
    return res.status(500).json({ message: "Erro ao listar produtos." });
  }
};

exports.obterProdutoPorId = (req, res) => {
  try {
    const { id } = req.params;
    const produto = produtos.find((p) => p.id === parseInt(id));

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    return res.status(200).json(produto);
  } catch (error) {
    console.error("Erro ao obter produto:", error);
    return res.status(500).json({ message: "Erro ao obter produto." });
  }
};

exports.atualizarProduto = (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, preco, estoque } = req.body;

    const index = produtos.findIndex((p) => p.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    produtos[index] = {
      ...produtos[index],
      nome: nome || produtos[index].nome,
      descricao: descricao || produtos[index].descricao,
      preco: preco || produtos[index].preco,
      estoque: estoque !== undefined ? estoque : produtos[index].estoque,
    };

    return res.status(200).json(produtos[index]);
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    return res.status(500).json({ message: "Erro ao atualizar produto." });
  }
};

exports.deletarProduto = (req, res) => {
  try {
    const { id } = req.params;
    const index = produtos.findIndex((p) => p.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    produtos.splice(index, 1); // Remove o produto do array
    return res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    return res.status(500).json({ message: "Erro ao deletar produto." });
  }
};



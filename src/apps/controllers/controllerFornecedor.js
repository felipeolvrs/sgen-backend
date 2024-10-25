let fornecedores = [];

exports.criarFornecedor = (req, res) => {
  try {
    const {
      nome,
      endereco,
      telefone,
      cnpj,
      tempoEntrega,
      unidadesDesconto,
      valorDesconto,
      produtos,
    } = req.body;

    if (!nome || !endereco || !telefone || !cnpj) {
      return res
        .status(400)
        .json({ message: "Campos obrigatórios não preenchidos." });
    }

    const novoFornecedor = {
      id: Date.now(),
      nome,
      endereco,
      telefone,
      cnpj,
      tempoEntrega,
      unidadesDesconto,
      valorDesconto,
      produtos,
    };

    fornecedores.push(novoFornecedor);
    return res.status(201).json(novoFornecedor);
  } catch (error) {
    console.error("Erro ao criar fornecedor:", error);
    return res.status(500).json({ message: "Erro ao criar fornecedor." });
  }
};

exports.listarFornecedores = (req, res) => {
  try {
    return res.json(fornecedores);
  } catch (error) {
    console.error("Erro ao listar pedidos:", error);
    return res.status(500).json({ message: "Erro ao listar fornecedores." });
  }
};

exports.deletarFornecedores = (req, res) => {
  try {
    const { id } = req.params;
    const fornecedoresExistente = fornecedores.find(
      (fornecedor) => fornecedor.id === parseInt(id)
    );

    if (!fornecedoresExistente) {
      return res.status(404).json({ message: "fornecedores não encontrado." });
    }

    fornecedores = fornecedores.filter(
      (fornecedor) => fornecedor.id !== parseInt(id)
    );
    return res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar pedido:", error);
    return res.status(500).json({ message: "Erro ao deletar pedido." });
  }
};

exports.atualizarFornecedores = (req, res) => {
  try {
    const { id } = req.params;
    const {
      nome,
      endereco,
      telefone,
      cnpj,
      tempoEntrega,
      unidadesDesconto,
      valorDesconto,
      produtos,
    } = req.body;

    const index = fornecedores.findIndex(
      (fornecedor) => fornecedor.id === parseInt(id)
    );

    if (index === -1) {
      return res.status(404).json({ message: "Fornecedor não encontrado." });
    }

    fornecedores[index] = {
      ...fornecedores[index],
      nome: nome || fornecedores[index].nome,
      endereco: endereco || fornecedores[index].endereco,
      telefone: telefone || fornecedores[index].telefone,
      cnpj: cnpj || fornecedores[index].cnpj,
      tempoEntrega:
        tempoEntrega !== undefined
          ? tempoEntrega
          : fornecedores[index].tempoEntrega,
      unidadesDesconto:
        unidadesDesconto !== undefined
          ? unidadesDesconto
          : fornecedores[index].unidadesDesconto,
      valorDesconto:
        valorDesconto !== undefined
          ? valorDesconto
          : fornecedores[index].valorDesconto,
      produtos: produtos || fornecedores[index].produtos,
    };

    return res.status(200).json(fornecedores[index]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao atualizar fornecedor." });
  }
};

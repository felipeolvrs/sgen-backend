let pedidos = [];

exports.criarPedido = (req, res) => {
  try {
    const {
      cliente,
      dataPedido,
      items,
      total,
      metodoPagamento,
      status,
      enderecoEntrega,
      frete,
      observacoes,
    } = req.body;


    if (!cliente || !items || !total) {
      return res
        .status(400)
        .json({ message: "Campos obrigatórios: cliente, items e total." });
    }

    const novoPedido = {
      id: Date.now(),
      cliente,
      dataPedido: dataPedido || new Date().toISOString(),
      items,
      total,
      metodoPagamento,
      status: status || "Pendente",
      enderecoEntrega,
      frete,
      observacoes,
    };

    pedidos.push(novoPedido);
    return res.status(201).json(novoPedido);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    return res.status(500).json({ message: "Erro ao criar pedido." });
  }
};

exports.listarPedidos = (req, res) => {
  try {
    return res.json(pedidos);
  } catch (error) {
    console.error("Erro ao listar pedidos:", error);
    return res.status(500).json({ message: "Erro ao listar pedidos." });
  }
};

exports.deletarPedidos = (req, res) => {
  try {
    const { id } = req.params;
    const pedidoExistente = pedidos.find(
      (pedido) => pedido.id === parseInt(id)
    );

    if (!pedidoExistente) {
      return res.status(404).json({ message: "Pedido não encontrado." });
    }

    pedidos = pedidos.filter((pedido) => pedido.id !== parseInt(id));
    return res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar pedido:", error);
    return res.status(500).json({ message: "Erro ao deletar pedido." });
  }
};

exports.atualizarPedidos = (req, res) => {
  try {
    const { id } = req.params;
    const {
      cliente,
      dataPedido,
      items,
      total,
      metodoPagamento,
      status,
      enderecoEntrega,
      frete,
      observacoes,
    } = req.body;

    const index = pedidos.findIndex((pedido) => pedido.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({ message: "Pedido não encontrado." });
    }

    pedidos[index] = {
      ...pedidos[index],
      cliente,
      items,
      total,
      status,
      dataPedido: dataPedido || pedidos[index].dataPedido,
      enderecoEntrega: enderecoEntrega || pedidos[index].enderecoEntrega,
      frete: frete || pedidos[index].frete,
      observacoes: observacoes || pedidos[index].observacoes,
      metodoPagamento: metodoPagamento || pedidos[index].metodoPagamento,
    };

    return res.json(pedidos[index]);
  } catch (error) {
    console.error("Erro ao atualizar pedido:", error);
    return res.status(500).json({ message: "Erro ao atualizar pedido." });
  }
};

const validarPedido = (req, res, next) => {
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

  if (!cliente || !items || total === undefined) {
    return res.status(400).json({
      message: "Campos obrigatórios: cliente, items e total.",
    });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      message: "O campo 'items' deve ser um array não vazio.",
    });
  }

  if (typeof total !== "number") {
    return res.status(400).json({
      message: "O campo 'total' deve ser um número.",
    });
  }

  next();
};

module.exports = validarPedido;

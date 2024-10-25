const { Router } = require("express");
const routes = new Router();

const validarPedido = require("../apps/middlewares/validarPedido");
const controllerPedido = require("../apps/controllers/controllerPedido");
const controllerFornecedor = require("../apps/controllers/controllerFornecedor");
const controllerEstoque = require("../apps/controllers/controllerEstoque");
const controllerProduto = require("../apps/controllers/controllerProduto");
const controllerMovimentacao = require("../apps/controllers/controllerMovimentacao");
const controllerConsulta = require("../apps/controllers/controllerConsulta");
const controllerRelatorio = require("../apps/controllers/controllerRelatorio");

routes.get("/", (req, res) => {
  return res.send("API funcionando!");
});

// Pedidos
routes.post("/pedidos", validarPedido, controllerPedido.criarPedido);
routes.get("/pedidos", controllerPedido.listarPedidos);
routes.delete("/pedidos/:id", controllerPedido.deletarPedidos);
routes.put("/pedidos/:id", controllerPedido.atualizarPedidos);

// Fornecedores
routes.post("/fornecedores", controllerFornecedor.criarFornecedor);
routes.get("/fornecedores", controllerFornecedor.listarFornecedores);
routes.put("/fornecedores/:id", controllerFornecedor.atualizarFornecedores);
routes.delete("/fornecedores/:id", controllerFornecedor.deletarFornecedores);

// Estoque
routes.get("/estoque", controllerEstoque.consultarEstoque);
routes.get("/estoque/sincronizar", controllerEstoque.sincronizar);
routes.post(
  "/estoque/atualizar",
  controllerEstoque.atualizarEstoqueManualmente
);

// Produto
routes.post("/produtos", controllerProduto.criarProduto);
routes.get("/produtos", controllerProduto.listarProdutos);
routes.get("/produtos/:id", controllerProduto.obterProdutoPorId);
routes.put("/produtos/:id", controllerProduto.atualizarProduto);
routes.delete("/produtos/:id", controllerProduto.deletarProduto);

//Movimentacao
routes.post("/estoque/movimentar", controllerMovimentacao.atualizarEstoque);

//Consulta
routes.get("/estoque/consultar", controllerConsulta.consultarEstoque);

//Relatorio
routes.get("/estoque/relatorio", controllerRelatorio.gerarRelatorio);

module.exports = routes;

const { Parser } = require("json2csv");
const fs = require("fs");

let produtos = [

  { id: 1, nome: "Produto A", quantidade: 10, localizacao: "Armazém 1" },
  { id: 2, nome: "Produto B", quantidade: 5, localizacao: "Armazém 2" },
];

exports.gerarRelatorio = (req, res) => {
  try {
    const produtosJson = produtos.map((produto) => ({
      nome: produto.nome,
      quantidade: produto.quantidade,
      localizacao: produto.localizacao,
    }));

    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(produtosJson);
    
    fs.writeFileSync("relatorio_produtos.csv", csv);

    res.status(200).json({
      message: "Relatório gerado com sucesso!",
      file: "relatorio_produtos.csv",
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao gerar relatório." });
  }
};

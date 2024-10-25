const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db");

const Produto = sequelize.define(
  "Produto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false, // Nome do produto é obrigatório
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true, // Descrição do produto é opcional
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false, // Preço do produto é obrigatório
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false, // Estoque do produto é obrigatório
    },
    localizacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true, // Categoria do produto é opcional
    },
    imagemUrl: {
      type: DataTypes.STRING,
      allowNull: true, // URL da imagem do produto é opcional
    },
  },
  {
    // Configurações adicionais, se necessário
    timestamps: true, // Adiciona createdAt e updatedAt
    underscored: true, // Usar snake_case em vez de camelCase
  }
);

module.exports = Produto;

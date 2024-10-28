require("dotenv").config();
const { Sequelize } = require('sequelize');
const { USER, PASSWORD, BD, DIALECT, HOST } = process.env;

const sequelize = new Sequelize(BD, USER, PASSWORD, {
  dialect: DIALECT,
  host: HOST,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });

module.exports = sequelize;

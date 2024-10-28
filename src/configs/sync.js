const sequelize = require("../configs/db");

async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true });
    console.log("Banco de dados e tabelas criados/atualizados com sucesso.");
  } catch (error) {
    console.error("Erro ao criar/atualizar o banco de dados:", error);
  }
}

syncDatabase();

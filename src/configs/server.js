require("dotenv").config();
const routes = require("./routes");
const express = require("express");
const app = express();

app.use(express.json());
app.use(routes);

const { port } = process.env;
app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`);
});

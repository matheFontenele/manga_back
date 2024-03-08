import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipulardorErros from "./middlewares/manipulatodorErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});
conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
});

/////////////////Manipulação da API//////////////////
const app = express();
routes(app);

app.use(manipulador404);

// eslint-disable-next-line no-unused-vars
app.use(manipulardorErros);

export default app;

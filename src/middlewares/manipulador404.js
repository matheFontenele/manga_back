import Erro404 from "../erros/Erro404.js";

// eslint-disable-next-line no-unused-vars
function manipulador404(req, res, next) {
  const err404 = new Erro404();
  next(err404);
}

export default manipulador404;
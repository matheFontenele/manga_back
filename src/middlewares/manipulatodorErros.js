import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import ReqIncorreta from "../erros/ReqIncorreta.js";
import ErroValida from "../erros/ErroValida.js";
import Erro404 from "../erros/Erro404.js";

// eslint-disable-next-line no-unused-vars
function manipulardorErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new ReqIncorreta().enviarResp(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValida().enviarResp(res, Object.values(erro.errors).map(erro => erro.message).join("; "));
    console.log(erro.errors);
  } else if (erro instanceof Erro404) {
    erro.enviarResp(res);
  } else {
    new ErroBase().enviarResp(res);
  }
}

export default manipulardorErros;
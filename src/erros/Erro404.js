import ErroBase from "./ErroBase.js";

class Erro404 extends ErroBase {
  constructor(msg = "Pagina não encontrada") {
    super(msg, 404, "Verifique a URL da pagina");
  }
}

export default Erro404;
import ErroBase from "./ErroBase.js";

class ErroValida extends ErroBase {
  constructor() {

    super({message: "Houve um erro de validação de dados"}, 402);
  }
}

export default ErroValida;
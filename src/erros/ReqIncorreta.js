import ErroBase from "./ErroBase.js";

class ReqIncorreta extends ErroBase {
  constructor() {
    super({message: "Um ou mais dados fornecidos estão incorretos"}, 401);
  }
}

export default ReqIncorreta;
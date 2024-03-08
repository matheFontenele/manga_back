class ErroBase extends Error {
  constructor(mensagem = "Erro interno do servidor", status = 500, erro = "Tente novamente") {
    super();
    this.mensagem = mensagem;
    this.status = status;
    this.erro = erro;
  }

  enviarResp(res, erro = "Tente novamente") {

    res.status(this.status).send({
      mensagem: this.mensagem,
      status: this.status,
      erro: erro
    });
  }

}

export default ErroBase;
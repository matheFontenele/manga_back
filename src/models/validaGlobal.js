import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validade", {
  validator: (valor) => valor !== "",
  message: "É necessario deixar pelo menos um caracter no campo"
});
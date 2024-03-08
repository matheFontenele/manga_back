import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: [true, "O nome do(a) é obrigatorio"] },
  mangas: { type: Number, 
    validate: {
      validator: (valor) => {return valor >= 1;},
      message: "O numero de mangas deve ser no minimo 1"
    }, 
    required: [true, "O numero de capitulos do manga é obrigatorio"]  }
}, { versionKey: false });

const autor = mongoose.model("autores", autorSchema);

export { autor, autorSchema };

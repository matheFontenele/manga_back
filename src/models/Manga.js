import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const mangaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: [true, "O titulo do manga é obrigatorio"] },
  tipo: { type: String },
  capitulos: { 
    type: Number, 
    validate: {
      validator: (valor) => {return valor >= 1;},
      message: "O numero de capitulos deve ser no minimo 1"
    }, 
    required: [true, "O numero de capitulos do manga é obrigatorio"] },
  anime: { type: Boolean },
  autor: autorSchema
}, { versionKey: false });

const manga = mongoose.model("mangas", mangaSchema);

export default manga;

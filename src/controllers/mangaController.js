import mangas from "../models/Manga.js";
import { autor } from "../models/index.js";

class MangaController {

  static async listarMangas (req, res, next) {
    try {
      const { limite = 5, pagina = 1 } = req.query;

      const listaLivros = await mangas.find()
        .skip((pagina -1) * limite)
        .limit(limite)
        .populate("autor")
        .exec();

      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarMangaPorId (req, res, next) {
    try {
      const id = req.params.id;
      const mangaEncontrado = await mangas.findById(id);
      res.status(200).json(mangaEncontrado);
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarManga (req, res, next) {
    const novoManga = req.body;
    try {
      const autorEncontrado = await autor.findById(novoManga.autor);
      const mangaCompleto = { ...novoManga, autor: { ...autorEncontrado._doc }};
      const mangaCriado = await mangas.create(mangaCompleto);
      res.status(201).json({ message: "criado com sucesso", mangas: mangaCriado });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarManga (req, res, next) {
    try {
      const id = req.params.id;
      await mangas.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "manga atualizado" });
    } catch (erro) {
      next(erro);
    }
  }

  static async excluirManga (req, res, next) {
    try {
      const id = req.params.id;
      await mangas.findByIdAndDelete(id);
      res.status(200).json({ message: "manga excluído com sucesso" });
    } catch (erro) {
      next(erro);
    }
  }

  static async filtrarMangas (req, res, next) {
    try {
      const { tipo, titulo, anime, nomeAutor } = req.query; 

      //const regex = new RegExp(titulo, "i");

      const buscar = {};

      if (tipo) buscar.tipo = { $regex: tipo, $options: "i" };
      if (titulo) buscar.titulo = { $regex: titulo, $options: "i" };
      if (anime) buscar.anime = anime;

      if (nomeAutor) {
        const autorManga = await autor.findOne({ nome: nomeAutor });
        const autorId = autorManga._id;
        
        buscar.autor = autorId.nome;
      }

      const mangasFiltro = await mangas.find(buscar);
      
      res.status(200).json(mangasFiltro);
    } catch (erro) {
      next(erro);
    }
  }
}

export default MangaController;

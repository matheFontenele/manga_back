import express from "express";
import MangaController from "../controllers/mangaController.js";

const routes = express.Router();

routes
  .get("/mangas", MangaController.listarMangas)
  .get("/mangas/busca", MangaController.filtrarMangas)
  .get("/mangas/:id", MangaController.listarMangaPorId)
  .post("/mangas", MangaController.cadastrarManga)
  .put("/mangas/:id", MangaController.atualizarManga)
  .delete("/mangas/:id", MangaController.excluirManga);

export default routes;

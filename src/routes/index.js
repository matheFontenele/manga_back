import express from "express";
import mangas from "./mangasRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), mangas, autores);
};

export default routes;

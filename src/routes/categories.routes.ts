import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/CreateCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();

// Não deixaremos a rota ter acesso ao banco de dados
categoriesRoutes.post("/categories", (req, res) => {
  return createCategoryController.handle(req, res);
});
categoriesRoutes.get("/categories", (req, res) => {
  return listCategoryController.handle(req, res);
});

export default categoriesRoutes;

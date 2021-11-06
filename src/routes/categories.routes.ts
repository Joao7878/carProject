import { Router } from "express";

import CategoriesRepositories from "../modules/cars/repositories/CategoriesRepositories";
import { PostgresCategoryRepositories } from "../modules/cars/repositories/PostgresRepositories";
import CreateCategoryService from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepo = new CategoriesRepositories();
const category = new CreateCategoryService(categoryRepo);
// Não deixaremos a rota ter acesso ao banco de dados
categoriesRoutes.post("/categories", (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = category.execute({ name, description });
    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
categoriesRoutes.get("/categories", (req, res) => {
  try {
    const categories = categoryRepo.list();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default categoriesRoutes;

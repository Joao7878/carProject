import CategoriesRepositories from "../../repositories/CategoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
// Esse arquivo irá instanciar a classe para as rotas não precisarem fazer isso

const categoriesRepositories = new CategoriesRepositories();
const categoriesUseCase = new CreateCategoryUseCase(categoriesRepositories);
const createCategoryController = new CreateCategoryController(
  categoriesUseCase
);

export { createCategoryController, categoriesUseCase };

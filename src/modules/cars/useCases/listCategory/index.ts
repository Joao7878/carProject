import CategoriesRepositories from "../../repositories/CategoriesRepositories";
import { ListCategoryController } from "./listCategoryController";
import { ListCategoryUseCase } from "./listCategoryUseCase";

const listCategoryRepository = new CategoriesRepositories();
const listCategoryUseCase = new ListCategoryUseCase(listCategoryRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);
export { listCategoryUseCase, listCategoryController };

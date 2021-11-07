import CategoriesRepositories from "../../repositories/implementations/CategoriesRepositories";
import { ListCategoryController } from "./listCategoryController";
import { ListCategoryUseCase } from "./listCategoryUseCase";

const listCategoryRepository = CategoriesRepositories.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(listCategoryRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);
export { listCategoryUseCase, listCategoryController };

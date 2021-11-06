import Category from "../models/CategoryModel";
import {
  ICategoryRepositories,
  ICategoryRepositoriesDTO,
} from "./ICategoryRepositories";
// Apenas de exemplo
class PostgresCategoryRepositories implements ICategoryRepositories {
  create({ name, description }: ICategoryRepositoriesDTO) {
    return null;
  }
  list(): Category[] {
    return null;
  }
  findByName(name: string): Category {
    return null;
  }
}
export { PostgresCategoryRepositories };

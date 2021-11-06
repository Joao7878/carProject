import Category from "../models/CategoryModel";
import {
  ICategoryRepositories,
  ICategoryRepositoriesDTO,
} from "./ICategoryRepositories";
// O repositório de categorias é responsável por fazer as operações de CRUD

// Seria a nossa classe de CRUD
class CategoriesRepositories implements ICategoryRepositories {
  // A variável é privada para que não seja acessada fora da classe
  private categories: Category[];
  constructor() {
    this.categories = [];
  }
  create({ name, description }: ICategoryRepositoriesDTO) {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
    return category;
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export default CategoriesRepositories;

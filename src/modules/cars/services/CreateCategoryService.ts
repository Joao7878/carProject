// Será responsável por criar uma categoria

import {
  ICategoryRepositories,
  ICategoryRepositoriesDTO,
} from "../repositories/ICategoryRepositories";

class CreateCategoryService {
  // Inversão de dependência, o private é necessário
  constructor(private category: ICategoryRepositories) {
    this.category = category;
  }

  execute({ name, description }: ICategoryRepositoriesDTO) {
    const categoryAlreadyExists = this.category.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }
    const newCategory = this.category.create({ name, description });
    return newCategory;
  }
}

export default CreateCategoryService;

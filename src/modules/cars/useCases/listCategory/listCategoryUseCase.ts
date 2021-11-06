import CategoriesRepositories from "../../repositories/CategoriesRepositories";

class ListCategoryUseCase {
  private categoriesRepositories: CategoriesRepositories;
  // Outra maneira sem precisar passar o private no construtor
  constructor(categoriesRepositories: CategoriesRepositories) {
    this.categoriesRepositories = categoriesRepositories;
  }

  execute() {
    // Assim não iremos conseguir mostrar a lista pois está pegando a lista de categorias que será instanciada pelo list e não pelo create
    const categories = this.categoriesRepositories.list();
    return categories;
  }
}
export { ListCategoryUseCase };

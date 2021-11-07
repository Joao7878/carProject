import Category from "../../models/CategoryModel";
import {
  ICategoryRepositories,
  ICategoryRepositoriesDTO,
} from "../ICategoryRepositories";
// O repositório de categorias é responsável por fazer as operações de CRUD

// Seria a nossa classe de CRUD
class CategoriesRepositories implements ICategoryRepositories {
  // A variável é privada para que não seja acessada fora da classe
  private categories: Category[];
  // Colocaremos o singleton para que haja uma instância global da classe
  // Para isso iremos criar um método estático, pois não depende de nenhuma instância da classe
  private static instance: CategoriesRepositories;
  // Para isso iremos deixar o nosso construtor como privado, para que não seja possível instanciar a classe e haja somente uma instância
  private constructor() {
    this.categories = [];
  }
  // Agora iremos criar o método estático para que seja possível acessar a instância da classe
  public static getInstance(): CategoriesRepositories {
    // Se a instância não existir, iremos criar uma nova
    if (!this.instance) {
      this.instance = new CategoriesRepositories();
    }
    // Retornaremos a instância
    return this.instance;
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

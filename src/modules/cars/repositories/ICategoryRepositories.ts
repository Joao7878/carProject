import Category from "../models/CategoryModel";

interface ICategoryRepositoriesDTO {
  // A interface é responsável por definir os valores dos atributos
  name: string;
  description: string;
}

interface ICategoryRepositories {
  create({ name, description }: ICategoryRepositoriesDTO): Category;

  findByName(name: string): Category | undefined;
  list(): Category[];
}
export { ICategoryRepositories, ICategoryRepositoriesDTO };

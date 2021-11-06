import { Specification } from "../models/SpecificationModel";

interface ISpecificationRepositoriesDTO {
  name: string;
  description: string;
}

interface ISpecificationRepositories {
  create({ name, description }: ISpecificationRepositoriesDTO): Specification;
  list(): Specification[];
  findByName(name: string): Specification | undefined;
}

export { ISpecificationRepositories, ISpecificationRepositoriesDTO };

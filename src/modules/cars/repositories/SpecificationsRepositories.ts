import { Specification } from "../models/SpecificationModel";
import {
  ISpecificationRepositories,
  ISpecificationRepositoriesDTO,
} from "./ISpecificationRepositories";

class SpecificationsRepositories implements ISpecificationRepositories {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }
  create({ name, description }: ISpecificationRepositoriesDTO): Specification {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      createdAt: new Date(),
    });
    this.specifications.push(specification);
    return specification;
  }
  list(): Specification[] {
    return this.specifications;
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationsRepositories };

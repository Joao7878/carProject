import { ISpecificationRepositoriesDTO } from "../repositories/ISpecificationRepositories";
import { SpecificationsRepositories } from "../repositories/SpecificationsRepositories";

class CreateSpecificationService {
  constructor(private specificationsRepositories: SpecificationsRepositories) {
    this.specificationsRepositories = specificationsRepositories;
  }
  execute({ name, description }: ISpecificationRepositoriesDTO) {
    const specificationAlreadyExists =
      this.specificationsRepositories.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }
    const newSpecification = this.specificationsRepositories.create({
      name,
      description,
    });
    return newSpecification;
  }
}

export { CreateSpecificationService };

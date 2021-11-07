import { SpecificationsRepositories } from "../../repositories/implementations/SpecificationsRepositories";
import { ISpecificationRepositoriesDTO } from "../../repositories/ISpecificationRepositories";

class CreateSpecificationUseCase {
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

export { CreateSpecificationUseCase };

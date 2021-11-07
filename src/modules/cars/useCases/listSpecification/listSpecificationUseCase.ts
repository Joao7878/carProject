import { SpecificationsRepositories } from "../../repositories/implementations/SpecificationsRepositories";

class ListSpecificationUseCase {
  constructor(private specificationsRepositories: SpecificationsRepositories) {
    this.specificationsRepositories = specificationsRepositories;
  }

  execute() {
    const specifications = this.specificationsRepositories.list();
    return specifications;
  }
}

export { ListSpecificationUseCase };

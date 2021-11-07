import { SpecificationsRepositories } from "../../repositories/implementations/SpecificationsRepositories";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepositories = SpecificationsRepositories.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepositories
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController, createSpecificationUseCase };

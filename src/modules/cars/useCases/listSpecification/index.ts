import { SpecificationsRepositories } from "../../repositories/implementations/SpecificationsRepositories";
import { ListSpecificationController } from "./listSpecificationController";
import { ListSpecificationUseCase } from "./listSpecificationUseCase";

const specificationsRepositories = SpecificationsRepositories.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationsRepositories
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);

export { listSpecificationUseCase, listSpecificationController };

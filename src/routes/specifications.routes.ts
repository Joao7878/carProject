import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/CreateSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/specifications", (request, response) => {
  return createSpecificationController.handle(request, response);
});
specificationsRoutes.get("/specifications", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };

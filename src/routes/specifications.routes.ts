import { Router } from "express";

import { SpecificationsRepositories } from "../modules/cars/repositories/SpecificationsRepositories";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepositories = new SpecificationsRepositories();
const newSpecification = new CreateSpecificationService(
  specificationsRepositories
);

specificationsRoutes.post("/specifications", (request, response) => {
  try {
    const { name, description } = request.body;
    newSpecification.execute({ name, description });
    return response.status(201).json({ message: "Specification created" });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});
specificationsRoutes.get("/specifications", (request, response) => {
  try {
    const specifications = specificationsRepositories.list();
    return response.json(specifications);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export { specificationsRoutes };

import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {
    this.createSpecificationUseCase = createSpecificationUseCase;
  }

  handle(request: Request, response: Response): Response {
    try {
      const { name, description } = request.body;

      const result = this.createSpecificationUseCase.execute({
        name,
        description,
      });

      return response.status(201).send(result);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}

export { CreateSpecificationController };

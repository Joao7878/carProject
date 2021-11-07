import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./listSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {
    this.listSpecificationUseCase = listSpecificationUseCase;
  }
  handle(req: Request, res: Response) {
    try {
      const result = this.listSpecificationUseCase.execute();

      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({
        message: err.message || "Unexpected error.",
      });
    }
  }
}

export { ListSpecificationController };

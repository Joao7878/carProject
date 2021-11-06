import { Request, Response } from "express";

import { ListCategoryUseCase } from "./listCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase;
  }

  handle(request: Request, response: Response): Response {
    try {
      const category = this.listCategoryUseCase.execute();
      return response.status(200).json(category);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
export { ListCategoryController };

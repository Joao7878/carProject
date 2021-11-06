import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
// Basicamente é a mesma função que a rota executava, mas agora como um controller
// Faz com que o controller seja responsável por executar a função e a rota apenas chame o controller
// Porém o controller não instancia a classe, ele apenas executa a função
// Para isso iremos criar um arquivo para instanciar a classe e chamar o controller

class CreateCategoryController {
  constructor(private CreateCategoryUseCase: CreateCategoryUseCase) {
    this.CreateCategoryUseCase = CreateCategoryUseCase;
  }
  handle(request: Request, response: Response): Response {
    try {
      const { name, description } = request.body;
      this.CreateCategoryUseCase.execute({ name, description });
      return response.status(201).json({ message: "Category created" });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}

export { CreateCategoryController };

import { v4 as uuidv4 } from "uuid";
// Model é como o schema do mongoose para nossa aplicação
class Category {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export default Category;

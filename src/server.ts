import express from "express";

import categoriesRoutes from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();
app.use(express.json());
app.use(categoriesRoutes);
app.use(specificationsRoutes);
app.listen(3000, () => console.log("listening on 3000"));

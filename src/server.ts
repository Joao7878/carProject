import express from "express";
import swaggerUi from "swagger-ui-express";

import categoriesRoutes from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";
import swaggerFile from "./swagger.json";

const app = express();
app.use(express.json());
// Url to swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(categoriesRoutes);
app.use(specificationsRoutes);
app.listen(3000, () => console.log("listening on 3000"));

import { Router } from "express";
import bookController from "./controllers/Books";

const routes = Router();

routes.use("/books", bookController);

export default routes;
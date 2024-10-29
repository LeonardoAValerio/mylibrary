import { Router } from "express";
import bookController from "./controllers/Books";
import loginController from "./controllers/Login";

const routes = Router();

routes.use("/books", bookController);
routes.use("/login", loginController)

export default routes;
import { Router } from "express";
import bookController from "./controllers/Books";
import loginController from "./controllers/Login";
import { authTokenMiddleware } from "./middleware/authRoute";

const routes = Router();

routes.use("/books", authTokenMiddleware, bookController);
routes.use("/login", loginController)

export default routes;
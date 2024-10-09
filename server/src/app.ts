import { json } from "express";
import express from 'express';
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(json());
app.use(routes);

app.listen(8081, () => {
    console.log("Server rodando na porta: 8081");
});
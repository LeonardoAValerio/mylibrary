import { json } from "express";
import express, { Request, Response } from 'express';
import { getBookForId, getBooks } from './controllers/Books';
import { BookPostService } from "./services/Books/post";
import { Book } from "./models/Book";
import { BookPutService } from "./services/Books/put";
import cors from "cors";
import { BookDeleteService } from "./services/Books/delete";
import { query } from "./db";

const app = express();

app.use(cors());
app.use(json());

app.get("/books", async (req: Request, res: Response) => {
    try {
        const result = await query("SELECT * FROM books");
        res.send(result.rows);
    } catch(e) {

    }
});

app.listen(8081, () => {
    console.log("Server rodando na porta: 8081");
});
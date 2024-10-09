import { json } from "express";
import express, { Request, Response } from 'express';
import { getBookForId, getBooks } from './controllers/Books';
import { BookPostService } from "./services/Books/post";
import { Book } from "./models/Book";
import { BookPutService } from "./services/Books/put";
import cors from "cors";
import { BookDeleteService } from "./services/Books/delete";
import { query } from "./db";
import { BookRepositorie } from "./database/BookRepositorie";

const app = express();

app.use(cors());
app.use(json());

app.get("/books", async (req: Request, res: Response) => {
    try {
        const books = await BookRepositorie.selectAll();
        res.send(books);
    } catch(e) {

    }
});

app.get("/books/:id", async (req: Request, res: Response) => {
    try {
        const serchId = req.params.id;
        const book = await BookRepositorie.selectById(serchId);
        res.send(book);
    } catch(e) {
        res.send("nOT FOUNDE!")
    }
});

app.listen(8081, () => {
    console.log("Server rodando na porta: 8081");
});
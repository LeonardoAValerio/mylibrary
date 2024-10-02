import { json } from "express";
import express, { Request, Response } from 'express';
import { getBookForId, getBooks, editBookForId } from './controllers/Books';
import { BookPostService } from "./services/Books/post";
import { Book } from "./models/Book";
import { BookPatchService } from "./services/Books/patch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());

app.get("/books", (req: Request, res: Response) => {
    const books = getBooks();
    res.send(books)
});

app.get("/books/:id", (req: Request, res: Response) => {
    const searchId = req.params.id as string;
    const book = getBookForId(searchId);
    res.send(book)
});

app.post("/books", (req: Request, res: Response) => {
    const book  = new Book(req.body)
    const bookService = new BookPostService(book);
    const msg = bookService.execute();
    res.status(msg.statusCode).send(msg);  
});

app.patch("/books/:id", (req: Request, res: Response) => {
    const editId = req.params.id as string;
    const bookService = new BookPatchService(editId, req.body);
    const msg = bookService.execute();
    res.status(msg.statusCode).send(msg);  
});

app.listen(8081, () => {
    console.log("Server rodando na porta: 8081");
});
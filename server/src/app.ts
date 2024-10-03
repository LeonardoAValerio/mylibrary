import { json } from "express";
import express, { Request, Response } from 'express';
import { getBookForId, getBooks } from './controllers/Books';
import { BookPostService } from "./services/Books/post";
import { Book } from "./models/Book";
import { BookPutService } from "./services/Books/put";
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
    const book = getBookForId(searchId) || {};
    res.send(book)
});

app.post("/books", (req: Request, res: Response) => {
    const book  = new Book(req.body);
    const bookService = new BookPostService(book);
    const msg = bookService.execute();
    res.status(msg.statusCode).send(msg);  
});

app.put("/books/:id", (req: Request, res: Response) => {
    const editId = req.params.id as string;
    const book = new Book(req.body);
    const bookService = new BookPutService(editId, book);
    const msg = bookService.execute();
    res.status(msg.statusCode).send(msg);  
});

app.listen(8081, () => {
    console.log("Server rodando na porta: 8081");
});
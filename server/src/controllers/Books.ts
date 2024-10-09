import fs from 'fs';
import { Book } from '../models/Book';
import { Router, Request, Response } from 'express';
import { BookService } from '../services/Book';
import { Message } from '../helpers/Message';

const bookController = Router();

bookController.get("/", async (req: Request, res: Response) => {
    try {
        const books = await BookService.getBooks();
        res.send(books);
    }catch(e) {
        res.send(new Message(e.message, 400))
    }
});

bookController.get("/:id", async (req: Request, res: Response) => {
    try {
        const serchId = req.params.id;
        const books = await BookService.getBookForID(serchId);
        res.send(books);
    }catch(e) {
        res.status(400).send({message: "Not found"})
    }
});

bookController.post("/", async (req: Request, res: Response) => {
    try {
        await BookService.postBook(req.body);
        res.send({message: "Salvo com sucesso!"});
    }catch(e) {
        res.status(400).send({message: e.message})
    }
});

export default bookController;
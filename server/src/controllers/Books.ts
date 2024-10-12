import { Router, Request, Response } from 'express';
import { BookService } from '../services/Book';

const bookController = Router();

bookController.get("/", async (req: Request, res: Response) => {
    try {
        const books = await BookService.getBooks();
        res.send(books);
    }catch(e) {
        res.status(400).send({message: e.message});
    }
});

bookController.get("/:id", async (req: Request, res: Response) => {
    try {
        const serchId = req.params.id;
        const books = await BookService.getBookForID(serchId);
        res.send(books);
    }catch(e) {
        res.status(400).send({message: "Not found"});
    }
});

bookController.post("/", async (req: Request, res: Response) => {
    try {
        await BookService.postBook(req.body);
        res.send({message: "Salvo com sucesso!"});
    }catch(e) {
        res.status(400).send({message: e.message});
    }
});

bookController.put("/:id", async (req: Request, res: Response) => {
    try {
        const serchId = req.params.id;
        await BookService.updateBook(serchId, req.body);
        res.send({message: "Atualizado com sucesso!"});
    }catch(e) {
        res.status(400).send({message: e.message});
    }
});

export default bookController;
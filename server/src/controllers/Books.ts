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
        const id = req.params.id;
        const books = await BookService.getBookForID(id);
        res.send(books);
    }catch(e) {
        res.status(400).send({message: "Not found"});
    }
});

bookController.post("/", async (req: Request, res: Response) => {
    try {
        await BookService.postBook(req.body);
        res.send({message: "Saved successfully!"});
    }catch(e) {
        res.status(400).send({message: e.message});
    }
});

bookController.put("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await BookService.updateBook(id, req.body);
        res.send({message: "Updated successfully!"});
    }catch(e) {
        res.status(400).send({message: e.message});
    }
});

bookController.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await BookService.deleteBook(id);
        res.send({message: "Deleted successfully!"});
    }catch(e) {
        res.status(400).send({message: e.message});
    }
});

export default bookController;
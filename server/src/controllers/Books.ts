import { Router, Request, Response } from 'express';
import { BookService } from '../services/Book';
import { checkAndReturnMessageError } from '../helpers/Errors';

const bookController = Router();

bookController.get("/", async (req: Request, res: Response) => {
    try {
        const books = await BookService.getBooks();
        res.send(books).status(200);
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.send(msg).status(msg.statusCode);
    }
});

bookController.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const books = await BookService.getBookForID(id);
        res.send(books).status(200);
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.send(msg).status(msg.statusCode);
    }
});

bookController.post("/", async (req: Request, res: Response) => {
    try {
        await BookService.postBook(req.body);
        res.send({message: "Saved successfully!"}).status(201);
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.send(msg).status(msg.statusCode);
    }
});

bookController.put("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await BookService.updateBook(id, req.body);
        res.send({message: "Updated successfully!"}).status(200);
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.send(msg).status(msg.statusCode);
    }
});

bookController.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await BookService.deleteBook(id);
        res.send({message: "Deleted successfully!"}).status(200);
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.send(msg).status(msg.statusCode);
    }
});

export default bookController;
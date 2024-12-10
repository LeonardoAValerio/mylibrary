import { Router, Request, Response } from 'express';
import { BookService } from '../services/Book';
import { checkAndReturnMessageError } from '../helpers/Errors';

const bookController = Router();

bookController.get("/", async (req: Request, res: Response) => {
    try {
        const books = await BookService.getBooks(req.user_id);
        res.status(200).send(books);
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

bookController.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const book = await BookService.getBookForID(req.user_id, id);
        res.status(200).send(book ?? {message: "Not found book"});
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

bookController.post("/", async (req: Request, res: Response) => {
    try {
        await BookService.postBook(req.body, req.user_id);
        res.send({message: "Saved successfully!"}).status(201);
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

bookController.put("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await BookService.updateBook(req.user_id, id, req.body);
        res.status(200).send({message: "Updated successfully!"});
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

bookController.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await BookService.deleteBook(req.user_id, id);
        res.status(200).send({message: "Deleted successfully!"});
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

export default bookController;
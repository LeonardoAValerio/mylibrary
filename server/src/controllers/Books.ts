import { Router, Request, Response } from 'express';
import { BookService } from '../services/Book';
import { checkAndReturnMessageError } from '../helpers/Errors';
import jwt from 'jsonwebtoken';
import { DecodedToken } from '../helpers/Token';

const bookController = Router();

bookController.get("/", async (req: Request, res: Response) => {
    try {
        const decode = jwt.decode((req.headers.authorization as string)) as DecodedToken;
        const books = await BookService.getBooks(decode.id);
        res.status(200).send(books);
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

bookController.get("/:id", async (req: Request, res: Response) => {
    try {
        const decode = jwt.decode((req.headers.authorization as string)) as DecodedToken;
        const id = req.params.id;
        const book = await BookService.getBookForID(decode.id, id);
        res.status(200).send(book ?? {message: "Not found book"});
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

bookController.post("/", async (req: Request, res: Response) => {
    try {
        const decode = jwt.decode((req.headers.authorization as string)) as DecodedToken;
        await BookService.postBook(req.body, decode.id);
        res.send({message: "Saved successfully!"}).status(201);
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

bookController.put("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const decode = jwt.decode((req.headers.authorization as string)) as DecodedToken;
        await BookService.updateBook(decode.id, id, req.body);
        res.status(200).send({message: "Updated successfully!"});
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

bookController.delete("/:id", async (req: Request, res: Response) => {
    try {
        const decode = jwt.decode((req.headers.authorization as string)) as DecodedToken;
        const id = req.params.id;
        await BookService.deleteBook(decode.id, id);
        res.status(200).send({message: "Deleted successfully!"});
    }catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
});

export default bookController;
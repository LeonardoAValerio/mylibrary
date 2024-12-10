import { Router, Request, Response } from 'express';
import { UserService } from '../services/User';
import { checkAndReturnMessageError } from '../helpers/Errors';

const loginController = Router();

loginController.post("/", (async (req: Request, res: Response) => {
    try {
        const msg = await UserService.validateUserPassword(req.body.email, req.body.password);
        res.send(msg).status(200);
    } catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.status(msg.statusCode).send(msg);
    }
}));

loginController.post("/create-account", (async (req: Request, res: Response) => {
    try {
        await UserService.postUser(req.body);
        res.send({message: "Saved successfully!", statusCode: 201}).status(201);
    } catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.send(msg).status(msg.statusCode);
    }
}));

export default loginController;
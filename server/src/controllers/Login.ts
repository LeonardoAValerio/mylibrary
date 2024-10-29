import { Router, Request, Response } from 'express';
import { UserService } from '../services/User';
import { User } from '../models/User';
import { checkAndReturnMessageError } from '../helpers/Errors';
import { Message } from '../helpers/Message';

const loginController = Router();

loginController.post("/", (async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        const msg = await UserService.validateUserPassword(user.name, user.password);
        res.send(msg);
    } catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.send(msg).status(msg.statusCode);
    }
}));

loginController.post("/create-account", (async (req: Request, res: Response) => {
    try {
        await UserService.postUser(req.body);
        res.send({message: "Saved successfully!"}).status(201);
    } catch(e) {
        const msg = checkAndReturnMessageError(e);
        res.send(msg).status(msg.statusCode);
    }
}));

export default loginController;
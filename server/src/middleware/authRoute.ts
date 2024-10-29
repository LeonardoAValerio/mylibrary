import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import enviorments from "../enviorments";
import { CustomError } from "../helpers/Errors";



export function authTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authToken = req.headers.authtoken as string;

        jwt.verify(authToken, enviorments.KEY_JWT, (err) => {
            if(err) throw new CustomError("Invalid token!")
        });

        next();
    } catch (err) {
        res.status(403).send({ message: "Invalid authToken!" });
    }
}
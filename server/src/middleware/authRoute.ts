import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import enviorments from "../enviorments";
import { CustomError } from "../helpers/Errors";



export function authTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authToken = req.headers.authorization;
        if(!authToken) throw new CustomError("Invalid authToken!")
        jwt.verify(authToken, enviorments.KEY_JWT, (err) => {
            if(err) throw new CustomError("Invalid authToken!")
        });

        next();
    } catch (err) {
        res.status(403).send({ message: "Invalid authToken!" });
    }
}
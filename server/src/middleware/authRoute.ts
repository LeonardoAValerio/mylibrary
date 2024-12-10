import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import enviorments from "../enviorments";
import { CustomError } from "../helpers/Errors";
import { DecodedToken } from "../helpers/Token";

declare module "express-serve-static-core" {
    interface Request {
      user_id: string;
    }
}

export function authTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authToken = req.headers.authorization;
        if(!authToken) throw new CustomError("Invalid authToken!")
        jwt.verify(authToken, enviorments.KEY_JWT, (err) => {
            if(err) throw new CustomError("Invalid authToken!")
        });

        const token = jwt.decode(authToken) as DecodedToken;
        req.user_id = token.id;

        next();
    } catch (err) {
        res.status(403).send({ message: "Invalid authToken!" });
    }
}
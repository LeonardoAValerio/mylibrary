import { ErrorObject } from "ajv";
import { Message } from "../models/Message";

export class CustomError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class AjvErrors extends Error {
    errors: string[];

    constructor(message: string, validationErrors: ErrorObject[]) {
        super(message);
        this.errors = [];
        this.parseErrors(validationErrors);
    }

    private parseErrors(validationErrors: ErrorObject[]) {
        validationErrors.forEach(error => {
            if(error.message) this.errors.push(error.message); 
        });
    }
}

export function checkAndReturnMessageError(e: Error): Message {
    if(e instanceof CustomError) {
        return new Message(e.message, 400);
    }else if(e instanceof AjvErrors) {
        return new Message({message: e.message, errors: e.errors}, 400);
    }
    return new Message(e.message, 400);
}
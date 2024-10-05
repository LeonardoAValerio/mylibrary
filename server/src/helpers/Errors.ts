import { ErrorObject } from "ajv";

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
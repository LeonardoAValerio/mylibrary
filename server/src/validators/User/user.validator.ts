import { AjvErrors, CustomError } from "../../helpers/Errors";
import { Uuid } from "../../helpers/Uuid";
import { Book } from "../../models/Book";
import { validateJSONUser } from "./userValidation.schema";

export function validateBook(book: Book): void {
    const result = validateJSONUser(book);
    if(!result && validateJSONUser.errors) {
        throw new AjvErrors("Book is invalid!", validateJSONUser.errors)
    }
}
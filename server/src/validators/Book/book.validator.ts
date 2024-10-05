import { AjvErrors, CustomError } from "../../helpers/Errors";
import { Uuid } from "../../helpers/Uuid";
import { Book } from "../../models/Book";
import { validateJSONBook } from "./bookValidation.schema";

export function validateBook(book: Book): void {
    const result = validateJSONBook(book);
    if(!result && validateJSONBook.errors) {
        throw new AjvErrors("Book is invalid!", validateJSONBook.errors)
    }
}
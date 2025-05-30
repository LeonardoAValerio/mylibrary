import { AjvErrors } from "../../helpers/Errors";
import { Book } from "../../models/Book";
import { validateJSONBook } from "./bookValidation.schema";

export function validateBook(book: Book): void {
    const result = validateJSONBook(book);
    if(!result && validateJSONBook.errors) {
        throw new AjvErrors("Book is invalid!", validateJSONBook.errors)
    }
}
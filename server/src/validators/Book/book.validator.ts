import { Book } from "../../models/Book";
import { validateJSONBook } from "./bookValidation.schema";

export function validateBook(book: Book): void {
    const JSONBook = JSON.stringify(book);
    const result = validateJSONBook(JSONBook);
    if(!result) throw new Error("Book is invalid!");
}
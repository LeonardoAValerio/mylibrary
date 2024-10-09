import { BookRepositorie } from "../database/BookRepositorie";
import { Book } from "../models/Book";
import { CustomError } from "./Errors";
import { Uuid } from "./Uuid";

export function generateIdIfNotProvided(id?: string): string {
    if (!id) {
        return Uuid.createUuid();
    }
    return id;
}

export async function helperBookId(bookHelped: Book) {
    bookHelped.id = generateIdIfNotProvided(bookHelped.id);
    if (bookHelped.id && !Uuid.validateUuid(bookHelped.id)) {
        throw new CustomError("Invalid ID");
    }
    const books = await BookRepositorie.getAllBooks();
    if(books.some(book => bookHelped.id === book.id)) throw new CustomError("ID Alredy exists");
}
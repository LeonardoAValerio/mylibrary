import { BookRepositorie } from "../database/BookRepositorie";
import { UserRepositorie } from "../database/UserRepositorie";
import { Book } from "../models/Book";
import { User } from "../models/User";
import { CustomError } from "./Errors";
import { Uuid } from "./Uuid";

export function generateIdIfNotProvided(id?: string): string {
    if (!id) {
        return Uuid.createUuid();
    }
    return id;
}

//TODO: Isso aqui tá virando gambiarra viu!
export async function helperBookId(bookHelped: Book) {
    bookHelped.id = generateIdIfNotProvided(bookHelped.id);
    if (bookHelped.id && !Uuid.validateUuid(bookHelped.id)) {
        throw new CustomError("Invalid ID");
    }
    const books = await BookRepositorie.getAllBooks();
    if(books.some(book => bookHelped.id === book.id)) throw new CustomError("ID Alredy exists");
}

export async function helperUserId(userHelped: User) {
    userHelped.id = generateIdIfNotProvided(userHelped.id);
    if (userHelped.id && !Uuid.validateUuid(userHelped.id)) {
        throw new CustomError("Invalid ID");
    }
    const user = await UserRepositorie.getAllUsers();
    if(user.some(user => userHelped.id === user.id)) throw new CustomError("ID Alredy exists");
}
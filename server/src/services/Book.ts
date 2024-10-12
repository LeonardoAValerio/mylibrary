import { BookRepositorie } from "../database/BookRepositorie";
import { helperBookId } from "../helpers/Book";
import { CustomError } from "../helpers/Errors";
import { Uuid } from "../helpers/Uuid";
import { Book } from "../models/Book";
import { validateBook } from "../validators/Book/book.validator";

export class BookService {
    static async getBooks() {
        const books = await BookRepositorie.getAllBooks();
        return books;
    }

    static async getBookForID(id: string) {
        const book = await BookRepositorie.getBookById(id);
        return book;
    }

    static async postBook(req: any) {
        validateBook(req);
        await helperBookId(req);
        const book = new Book(req);
        await BookRepositorie.createBook(book);
    }

    static async updateBook(id:string, req: any) {
        const book = await this.getBookForID(id);
        if(!book) throw new CustomError("Not found book");
        const keys = Object.keys(book);

        for(const key of keys) {
            if(req[key]) {
                book[key] = req[key];
                validateBook(book);
                //TODO: Melhorar a validação de ID
                if(!Uuid.validateUuid(book.id)) throw new CustomError("Invalid ID");
                await BookRepositorie.updateBook({propertie: key, value: req[key]}, {propertie: "id", value: book["id"]});
            }
        }
    }
}
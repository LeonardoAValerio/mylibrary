import { BookRepositorie } from "../database/BookRepositorie";
import { helperBookId } from "../helpers/Book";
import { Book } from "../models/Book";
import { validateBook } from "../validators/Book/book.validator";

export class BookService {
    static async getBooks() {
        const books = await BookRepositorie.getAllBooks();
        console.log(books);
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
}
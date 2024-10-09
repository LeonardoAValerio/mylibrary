import { query } from "../db";
import { Book } from "../models/Book";

export class BookRepositorie {
    static async getAllBooks() {
        const result = await query("SELECT * FROM books");
        const books = result.rows as Book[];
        return books;
    }

    static async getBookById(id: string) {
        const result = await query("SELECT * FROM books where id = $1", [id]);
        const book = result.rows[0] as Book;
        return book;
    }

    static async createBook(book: Book) {
        console.log([[...Object.values(book)]])
        const params = [book.id, book.title, book.synopse, book.review, book.rating, book.urlImage, book.status];
        await query("INSERT INTO books values($1, $2, $3, $4, $5, $6, $7)", params);
    }
}
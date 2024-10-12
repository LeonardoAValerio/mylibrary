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
        const book = new Book(result.rows[0]);
        return book;
    }

    static async createBook(book: Book) {
        const params = [book.id, book.title, book.synopse, book.review, book.rating, book.urlImage, book.status];
        await query("INSERT INTO books values($1, $2, $3, $4, $5, $6, $7)", params);
    }

    static async updateBook(set: {propertie: string, value:any}, id: {propertie: string, value:any}) {
        const queryText = `UPDATE books SET ${set.propertie} = $1 WHERE ${id.propertie} = $2`
        const params = [set.value, id.value];
        await query(queryText, params)
    }
}
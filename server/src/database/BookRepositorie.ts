import { query } from "../db";
import { Book } from "../models/Book";

export class BookRepositorie {
    static async getAllBooks() {
        const result = await query("SELECT * FROM books");
        const books = result.rows.map(book => new Book(book))
        console.log(books);
        return books;
    }

    static async getBookById(id: string) {
        const result = await query("SELECT * FROM books where id = $1", [id]);
        const book = new Book(result.rows[0]);
        return book;
    }

    static async createBook(book: Book) {
        const params = [book.id, book.title, book.synopse, book.review, book.rating, book.url_image, book.status, book.id_user];
        console.log(params)
        await query("INSERT INTO books(id, title, synopse, review, rating, url_image, status, id_user) values($1, $2, $3, $4, $5, $6, $7, $8)", params);
    }

    static async updateBook(set: {propertie: string, value:any}, id: string) {
        const queryText = `UPDATE books SET ${set.propertie} = $1 WHERE id = $2`
        const params = [set.value, id];
        await query(queryText, params)
    }

    static async deleteBook(id: string) {
        await query("DELETE from books WHERE id = $1", [id]);
    }
}
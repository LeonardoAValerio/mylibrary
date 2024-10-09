import { query } from "../db";
import { Book } from "../models/Book";

export class BookRepositorie {
    static async selectAll() {
        const result = await query("SELECT * FROM books");
        const books = result.rows as Book[];
        return books;
    }

    static async selectById(id: string) {
        const result = await query("SELECT * FROM books where id = $1", [id]);
        const book = result.rows[0] as Book;
        return book;
    }

    static async 
}
import fs from 'fs';
import { Book } from '../models/Book';

function getBooksRaw(): any {
    const dbString = fs.readFileSync("src/json/books.json", { encoding: "utf-8" });
    const db = JSON.parse(dbString);
    return db.books;
}

export function getBooks(): Book[] {
    const books = getBooksRaw();
    return Object.values(books);
}

export function getBookForId(id: string): Book | null {
    const books = getBooksRaw();
    return books[id] || null;
}

export function saveBook(book: Book) {
    const books = getBooksRaw();
    books[book.id] = book;
    fs.writeFileSync("src/json/books.json", JSON.stringify({ books }));
}
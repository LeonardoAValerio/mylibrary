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

export function getBookForId(id: string): Book | {} {
    const books = getBooksRaw();
    return books[id] || {};
}

export function saveBook(book: Book) {
    const books = getBooksRaw();
    console.log(book);
    console.log(books);
    books[book.id] = book;
    console.log(books);
    fs.writeFileSync("src/json/books.json", JSON.stringify({ books }));
}

export function editBookForId(id: string, editedAttibrutes: any) {
    const books = getBooksRaw();
    const book = books[id];
    for (const key in book) {
        if (editedAttibrutes[key]) {
            book[key] = editedAttibrutes[key];
        }
    }
}
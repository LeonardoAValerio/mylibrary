import { BookRepositorie } from "../database/BookRepositorie";
import { helperBookId } from "../helpers/Ids";
import { CustomError } from "../helpers/Errors";
import { Uuid } from "../helpers/Uuid";
import { Book } from "../models/Book";
import { validateBook } from "../validators/Book/book.validator";

export class BookService {
    static async getBooks(id_user: string) {
        const books = await BookRepositorie.getAllBooks();
        const filteredBooks = books.filter(book => {
            if(book.id_user === id_user) return book;
        })
        return filteredBooks;
    }

    static async getBookForID(id_user: string, id: string) {
        const books = await BookService.getBooks(id_user);
        const filteredBook = books.find(book => book.id === id);
        return filteredBook;
    }

    static async postBook(req: any, id_user: string) {
        const book = new Book(req);
        validateBook(book);
        await helperBookId(book);
        if(book.id_user === "") book.id_user = id_user;
        await BookRepositorie.createBook(book);
    }

    static async updateBook(id_user: string, id: string, req: any) {
        const book = await this.getBookForID(id_user, id);
        if(!book) throw new CustomError("Not found book");
        const keys = Object.keys(book);

        //TODO: Melhorar Lógica de Update de Livro, e ajustar a validação do ID
        for(const key of keys) {
            if(req[key]) {
                book[key] = req[key];
                validateBook(book);
                if(!Uuid.validateUuid(book.id)) throw new CustomError("Invalid ID");
                await BookRepositorie.updateBook({propertie: key, value: req[key]}, id);
            }
        }
    }

    //TODO: Ele apenas poder deletar aqueles livros que são do usuário
    static async deleteBook(id_user: string, id: string) {
        const book = await this.getBookForID(id_user, id);
        if(!book) throw new CustomError("Not found book");
        await BookRepositorie.deleteBook(id);
    }
}
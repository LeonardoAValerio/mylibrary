import { Book } from '../../models/Book'
import { getBooks, saveBook } from '../../controllers/Books';
import { Message } from '../../models/Message';
import { AjvErrors, checkAndReturnMessageError, CustomError } from '../../helpers/Errors';
import { validateBook } from '../../validators/Book/book.validator';
import { Uuid } from '../../helpers/Uuid';

export class BookPostService {
    private book: Book;

    constructor(book: Book) {
        this.book = book;
        
    }

    execute(): Message {
        try {
            validateBook(this.book);
            this.helperBookId();
            saveBook(this.book);
            return new Message("Book saved successfully", 201);
        } catch(e) {
            return checkAndReturnMessageError(e);
        }
    }

    private generateIdIfNotProvided(id?: string): string {
        if (!id) {
            return Uuid.createUuid();
        }
        return id;
    }
    
    private helperBookId(): void {
        this.book.id = this.generateIdIfNotProvided(this.book.id);
        if (this.book.id && !Uuid.validateUuid(this.book.id)) {
            throw new CustomError("Invalid ID");
        }
        if (getBooks().some(book => book.id === this.book.id)) throw new CustomError("ID Alredy exists");
    }
}

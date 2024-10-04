import { Book } from '../../models/Book'
import { saveBook } from '../../controllers/Books';
import { Message } from '../../models/Message';
import { CustomError } from '../../utils/Error';
import { Uuid } from '../../utils/Uuid';
import { validateBook } from '../../validators/Book/book.validator';

export class BookPostService {
    private book: Book;

    constructor(book: Book) {
        this.book = book;
    }

    execute(): Message {
        try {
            validateBook(this.book);
            saveBook(this.book);
            return new Message("Book saved successfully", 201);
        } catch(e) {
            if(e instanceof CustomError) {
                return new Message(e.message, 400);
            }
            return new Message(e.message, 400);
        }
    }
}
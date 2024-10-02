import { Book } from '../../models/Book'
import { saveBook } from '../../controllers/Books';
import { Message } from '../../models/Message';
import { CustomError } from '../../utils/Error';
import { Uuid } from '../../utils/Uuid';

export class BookPostService {
    private book: Book;

    constructor(book: Book) {
        this.book = book;
    }

    execute(): Message {
        try {
            this.validateAttributes();
            saveBook(this.book);
            return new Message("Book Saved!", 201);
        } catch(e) {
            if(e instanceof CustomError) {
                return new Message(e.message, 400);
            }
            return new Message("Failed to save!", 400);
        }
    }

    private validateAttributes() {
        if(!this.book.title) throw new CustomError("Titulo necessário para o envio!");
        if(!this.book.id) this.book.id = Uuid.createUuid();
        if(!Uuid.validateUuid(this.book.id)) throw new CustomError("ID inválido!");
    }
}
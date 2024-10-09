import { Book } from '../../models/Book'
import { Message } from '../../helpers/Message';
import { checkAndReturnMessageError, CustomError } from '../../helpers/Errors';
import { validateBook } from '../../validators/Book/book.validator';

export class BookPutService {
    private id: string;
    private newAttributes: Book;
    private book: Book | null;

    constructor(id: string, attibrutes: Book) {
        this.id = id;
        this.newAttributes = attibrutes;
        // this.book = getBookForId(this.id);
    }

    // execute(): Message {
    //     try {
    //         this.setAttributes();
    //         console.log(this.newAttributes)
    //         validateBook(this.newAttributes);
    //         saveBook(this.newAttributes);
    //         return new Message("Book updated successfully", 200);
    //     }catch (e) {
    //         return checkAndReturnMessageError(e);
    //     }
    // }

    private setAttributes() {
        if(!this.book) throw new CustomError("Not found book");
        const keys = Object.keys(this.book);
        keys.forEach((key) => {
            if(!this.newAttributes[key]) {
                this.newAttributes[key] = this.book![key];
            }
        });
    }

}
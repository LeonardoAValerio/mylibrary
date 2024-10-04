import { Book } from '../../models/Book'
import { getBookForId, saveBook } from '../../controllers/Books';
import { Message } from '../../models/Message';
import { CustomError } from '../../utils/Error';
import { Uuid } from '../../utils/Uuid';

export class BookPutService {
    private id: string;
    private newAttributes: Book;
    private book: Book | null;

    constructor(id: string, attibrutes: Book) {
        this.id = id;
        this.newAttributes = attibrutes;
        this.book = getBookForId(this.id);
    }

    execute(): Message {
        try {
            //this.setAttributes();
            this.validateAttributes();
            saveBook(this.newAttributes);
            return new Message("Book updated successfully", 200);
        }catch (e) {
            if(e instanceof CustomError) {
                return new Message(e.message, 400);
            }
            return new Message("Failed to update!", 400);
        }
    }

    // private setAttributes() {
    //     if(!this.book) throw new CustomError("The book does not exist");
    //     const keys = Object.keys(this.book);
    //     keys.forEach((key) => {
    //         if(!this.newAttributes[key]) {
    //             this.newAttributes[key] = this.book[key];
    //         }
    //     });
    // }

    private validateAttributes() {
        if(!this.newAttributes.title) throw new CustomError("title is necessary");
        if(!this.newAttributes.id) this.newAttributes.id = Uuid.createUuid();
        if(!Uuid.validateUuid(this.newAttributes.id)) throw new CustomError("invalid ID");
    }

}
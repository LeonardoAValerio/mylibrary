import { Book } from '../../models/Book'
import { deleteBookForId, getBookForId } from '../../controllers/Books';
import { Message } from '../../models/Message';
import { checkAndReturnMessageError, CustomError } from '../../helpers/Errors';

export class BookDeleteService {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    execute(): Message {
        try {
            this.validateBookId();
            deleteBookForId(this.id);
            return new Message("Book deleted successfully", 200);
        } catch(e) {
            return checkAndReturnMessageError(e);
        }
    }

    private validateBookId(): void {
        if(!getBookForId(this.id)) throw new CustomError("Not found book");
    }
}

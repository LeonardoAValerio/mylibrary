import { Book } from '../../models/Book'
import { getBookForId, saveBook } from '../../controllers/Books';
import { Message } from '../../models/Message';
import { CustomError } from '../../utils/Error';
import { Uuid } from '../../utils/Uuid';

export class BookPatchService {
    private id: string;
    private attributes: {};

    constructor(id: string, attibrutes: {}) {
        this.id = id;
        this.attributes = attibrutes;
    }

    execute(): Message {
        try {
            
        }catch (e) {

        }
        return new Message("legal", 200);
    }
}
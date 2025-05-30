import { StatesBook } from '../helpers/StatesBookEnum';

export interface BookAttributes {
    id: string,
    title: string,
    synopse?: string,
    review?: string,
    url_image?: string,
    status?: StatesBook,
    rating?: number,
    id_user?: string
}

export class Book implements BookAttributes {
    id: string;
    title: string;
    status: StatesBook;
    synopse: string;
    review: string;
    url_image: string;
    rating: number;
    id_user: string;

    constructor(atributtes: BookAttributes) {
        this.id = atributtes.id;
        this.title = atributtes.title;
        this.status = atributtes.status || StatesBook.TOREAD;
        this.synopse = atributtes.synopse || "";
        this.review = atributtes.review || "";
        this.url_image = atributtes.url_image || "";
        this.rating = atributtes.rating || 0;
        this.id_user = atributtes.id_user || "";
    }
}
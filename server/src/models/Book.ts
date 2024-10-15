import { StatesBook } from '../helpers/StatesBookEnum';

export interface BookAttributes {
    id: string;
    title: string;
    synopse?: string;
    review?: string;
    urlImage?: string;
    status?: StatesBook;
    rating?: number;
}

export class Book implements BookAttributes {
    id: string;
    title: string;
    status: StatesBook;
    synopse: string;
    review: string;
    urlImage: string;
    rating: number;

    constructor(atributtes: BookAttributes) {
        this.id = atributtes.id;
        this.title = atributtes.title;
        this.status = atributtes.status || StatesBook.TOREAD;
        this.synopse = atributtes.synopse || "";
        this.review = atributtes.review || "";
        this.urlImage = atributtes.urlImage || "";
        this.rating = atributtes.rating || 0;
    }
}
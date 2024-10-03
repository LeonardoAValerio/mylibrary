import { Uuid } from '../utils/Uuid';
import { StatesBook } from './StatesBookEnum';

interface LivroAttributes {
    id: string,
    idAuthors?: string[],
    title: string,
    idCategories?: string[],
    status?: StatesBook;
    synopse?: string,
    review?: string,
    urlImage?: string;
}

export class Book implements LivroAttributes {
    id: string;
    title: string;
    idAuthors: string[];
    idCategories: string[];
    status: StatesBook;
    synopse: string;
    review: string;
    urlImage: string;

    constructor(atributtes: LivroAttributes) {
        this.id = atributtes.id;
        this.title = atributtes.title;
        this.idAuthors = atributtes.idAuthors || [];
        this.idCategories = atributtes.idCategories || [];
        this.status = atributtes.status || StatesBook.TOREAD;
        this.synopse = atributtes.synopse || "";
        this.review = atributtes.review || "";
        this.urlImage = atributtes.urlImage || "";
    }
}
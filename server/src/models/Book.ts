import { Uuid } from '../utils/Uuid';

interface LivroAttributes {
    id: string;
    title: string
}

export class Book implements LivroAttributes {
    id: string;
    title: string;

    constructor(atributtes: LivroAttributes) {
        this.id = atributtes.id;
        this.title = atributtes.title;
    }
}
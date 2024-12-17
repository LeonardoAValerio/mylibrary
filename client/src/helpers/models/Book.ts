export type StatusBook = "TOREAD" | "READING" | "READED";
export type RatingBook = 1 | 2 | 3 | 4 | 5;

export interface BookAttributes {
    id?: string,
    title?: string,
    synopse?: string,
    review?: string,
    url_image?: string,
    status?: StatusBook,
    rating?: number,
    id_user?: string
}
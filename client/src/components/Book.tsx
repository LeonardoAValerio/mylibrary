import { FunctionComponent, useEffect } from "react"
import './book.css'

interface BookProps {
    id: string;
    title: string;
    urlImage?: string;
}

export const Book: FunctionComponent<BookProps> = ({ title, id, urlImage }) => {
    const defaultImageURL = "https://cdn.pixabay.com/photo/2020/09/13/20/01/book-5569269_960_720.png"
    urlImage = urlImage || defaultImageURL;
    
    return (
    <div className="book" id={id}>
        <img src={urlImage}></img>
        <p>{title}</p>
    </div>
    );
}
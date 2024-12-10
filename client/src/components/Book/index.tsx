import { FunctionComponent, useEffect } from "react"
import './book.css'
import { Navigate, useNavigate } from "react-router-dom";

interface BookProps {
    id?: string;
    title?: string;
    url_image?: string;
}

export const Book: FunctionComponent<BookProps> = ({ title, id, url_image }) => {
    const navigate = useNavigate();
    const defaultImageURL = "https://cdn.pixabay.com/photo/2020/09/13/20/01/book-5569269_960_720.png"
    url_image = url_image || defaultImageURL;

    const handleClick = () => {
        navigate(`books/${id}`)
    }

    return (
    <div className="book" onClick={handleClick}>
        <img src={url_image}></img>
        <p>{title}</p>
    </div>
    );
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BookAttributes } from '../Home';

export function BookDetails() {
    const {id} = useParams()
    const [book, setBook] = useState<BookAttributes>({});

    useEffect(() => {
        const fetchBookId = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/books/${id}`);
                console.log(response.data)
                setBook(response.data);
              } catch (error) {
                console.error(error)
              }
        }

        fetchBookId();
    }, [id]);

    return (
        <div>
            <h1>{book.title}</h1>
        </div>
    );
}
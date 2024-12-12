import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BookAttributes } from '../Home';
import { requisition } from '../../helpers/Requisition';
import { NavHome } from '../../components/NavHome';
import "./bookDetails.css"
import { Field } from '../../components/FieldForm';

export function BookDetails() {
    const {id} = useParams()
    const [book, setBook] = useState<BookAttributes>({});

    useEffect(() => {
        const fetchBookId = async () => {
            try {
                const response = await requisition.get("books/" + id);
                setBook(response.data);
              } catch (error) {
                console.error(error)
              }
        }

        fetchBookId();
    }, [id]);

    return (
        <div className="page">
            <NavHome></NavHome>
            <main className='book-details'>
                <form>
                    <Field>
                        <label>Title</label>
                        <h1>{book.title}</h1>
                    </Field>
                </form>
            </main>
        </div>
    );
}
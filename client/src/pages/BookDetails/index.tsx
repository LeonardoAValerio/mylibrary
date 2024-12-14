import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requisition } from '../../helpers/Requisition';
import "./bookDetails.css"
import { Field } from '../../components/FieldForm';
import { Page } from '../../components/StantardPage';
import { BookAttributes } from '../../helpers/models/Book';

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
        <Page>
            <main className='book-details'>
                <form>
                    <Field>
                        <label>Title</label>
                        <h1>{book.title}</h1>
                    </Field>
                </form>
            </main>
        </Page>
    );
}
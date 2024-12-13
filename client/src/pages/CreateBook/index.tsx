import React, { useState, useEffect } from 'react';
import { BookAttributes } from '../Home';
import { Page } from '../../components/StantardPage';
import "./createBook.css"
import { Field } from '../../components/FieldForm';
import { SaveButton } from '../../components/SaveButton';
import { Book } from '../../components/Book';
import { requisition } from '../../helpers/Requisition';

export function CreateBook() {
  const [book] = useState<BookAttributes>({});

  const postBook = async () => {
    try {
      console.log(book)
      const result = await requisition.post("books/", book);
      console.log(result.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Page>
      <main className='create-book-page'>
        <form>
          <Field>
            <label>Titulo</label>
            <input placeholder='Digite um titulo' onChange={(e) => book.title = e.target.value}></input>
          </Field>
          <Field>
            <label>Sinopse</label>
            <input placeholder='Digite uma sinopse' onChange={(e) => book.synopse = e.target.value}></input>
          </Field>
        </form>
        <SaveButton requisitionFunction={postBook}></SaveButton>
      </main>
    </Page>
  );
}
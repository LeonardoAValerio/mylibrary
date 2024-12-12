import React, { useState, useEffect } from 'react';
import { Book } from "../../components/Book"
import './home.css'
import { requisition } from '../../helpers/Requisition';
import { AddButton } from '../../components/AddButton';
import { Page } from '../../components/StantardPage';

export interface BookAttributes {
  id?: string;
  title?: string;
  synopse?: string;
  review?: string;
  url_image?: string;
}

export function Home() {
  const [books, setBooks] = useState<BookAttributes[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await requisition.get("books");
        setBooks(response.data);
      } catch (error) {

      }
    };

    fetchBooks();
  }, []);

  return (
    <Page>
      <main className="home">
        <h1>Livros:</h1>
        <div className='align-library'>
          <div className="library">
            {books.map((book) => (
              <Book id={book.id} title={book.title} url_image={book.url_image}></Book>
            ))}
          </div>
        </div>
        <AddButton pathAddPage='/books/create'></AddButton>
      </main>
    </Page>
  );
}
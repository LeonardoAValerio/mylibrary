import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Book } from "../../components/Book"
import './home.css'
import { requisition } from '../../helpers/Requisition';

export interface BookAttributes {
  id?: string;
  title?: string;
  synopse?: string;
  review?: string;
  urlImage?: string;
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
    <main className="home">
      <h1>Livros:</h1>
      <div className='align-library'>
        <div className="library">
          {books.map((book) => (
            <Book id={book.id} title={book.title} urlImage={book.urlImage}></Book>
          ))}
        </div>
      </div>
    </main>
  );
}
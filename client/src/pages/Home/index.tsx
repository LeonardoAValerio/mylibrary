import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BookAttibrutes {
  title: string;
  id: string;
}

export function Home() {
  const [books, setBooks] = useState<BookAttibrutes[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8081/books'); 
        setBooks(response.data);
      } catch (error) {

      } 
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Livros:</h1>
      <div>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong>
          </li>
        ))}
      </div>
    </div>
  );
}
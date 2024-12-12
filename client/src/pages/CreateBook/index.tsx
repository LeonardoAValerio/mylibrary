import React, { useState, useEffect } from 'react';
import { BookAttributes } from '../Home';
import { Page } from '../../components/StantardPage';


export function CreateBook() {
  const [books, setBooks] = useState<BookAttributes[]>([]);

  return (
    <Page>
      <div>
        Oi
      </div>
    </Page>
  );
}
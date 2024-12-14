import React, { useState, useEffect } from 'react';
import { Page } from '../../components/StantardPage';
import "./createBook.css"
import { Field } from '../../components/FieldForm';
import { SaveButton } from '../../components/SaveButton';
import { requisition } from '../../helpers/Requisition';
import { BookAttributes, RatingBook, StatusBook } from '../../helpers/models/Book';
import { Img } from '../../components/Img';
import { Alert, AlertProps, AlertTypes } from '../../components/Alert';

export function CreateBook() {
  const [book] = useState<BookAttributes>({});
  const [imgBook, setImgBook] = useState(book.url_image);
  const [resultRequisition, setResultRequisition] = useState<AlertProps>({message: "", type: AlertTypes.NULL});

  const postBook = async () => {
    try {
      const result = await requisition.post("books/", book);
      setResultRequisition({message: "Livro criado com sucesso!", type: AlertTypes.SUCCESS});
    } catch (error) {
      setResultRequisition({message: "Algum campo inválido!", type: AlertTypes.FAILED});
    }
  }

  return (
    <Page>
      <main className='create-book-page'>
        <form>
          <Field sizeInPercent='100%'>
            <label>Titulo</label>
            <input placeholder='Digite um titulo' onChange={(e) => book.title = e.target.value} required></input>
          </Field>
          <Field sizeInPercent='45%'>
            <label>Nota</label>
            <select onChange={(e) => book.rating = parseInt(e.target.value) as RatingBook}>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
            </select>
          </Field>
          <Field sizeInPercent='45%'>
            <label>Status</label>
            <select onChange={(e) => book.status = e.target.value as StatusBook}>
              <option value={"TOREAD"}>Não lido</option>
              <option value={"READING"}>Lendo</option>
              <option value={"READED"}>Lido</option>
            </select>
          </Field>
          <Field sizeInPercent='100%'>
            <label>Sinopse</label>
            <textarea placeholder='Informe uma sinopse' onChange={(e) => book.synopse = e.target.value}></textarea>
          </Field>
          <Field sizeInPercent='100%'>
            <label>Review</label>
            <textarea placeholder='Informe uma review' onChange={(e) => book.review = e.target.value}></textarea>
          </Field>
          <Field sizeInPercent='50%'>
            <label>Image</label>
            <input placeholder='Coloque a URL da imagem' onChange={(e) => {
              book.url_image = e.target.value
              setImgBook(book.url_image);
            }}></input>
          </Field>
          <Img imgUrl={imgBook}></Img>
        </form>
        <div>
          {resultRequisition.message !== "" &&
            <Alert message={resultRequisition.message} type={resultRequisition.type}></Alert>
          }
        </div>
        <SaveButton requisitionFunction={postBook}></SaveButton>
      </main>
    </Page>
  );
}
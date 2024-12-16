import React, { useState, useEffect } from 'react';
import { Page } from '../../components/StantardPage';
import "./createBook.css"
import { Field } from '../../components/FieldForm';
import { SaveButton } from '../../components/SaveButton';
import { requisition } from '../../helpers/Requisition';
import { BookAttributes, RatingBook, StatusBook } from '../../helpers/models/Book';
import { Img } from '../../components/Img';
import { Alert, AlertProps, AlertTypes } from '../../components/Alert';
import { useParams } from 'react-router-dom';

export function BookPage() {
  const {id} = useParams();
  const [book, setBook] = useState<BookAttributes>({});
  const [imgBook, setImgBook] = useState(book.url_image);
  const [resultRequisition, setResultRequisition] = useState<AlertProps>({message: "", type: AlertTypes.NULL});
  const [isNewBook, setIsNewBook] = useState(true);

  useEffect(() => {
    if(id !== "create") {
      getBook();
      setIsNewBook(false);
    }
    setImgBook(book.url_image ?? "")
  }, [])

  const getBook = async () => {
    try {
      const result = await requisition.get("books/" + id);
      setBook(result.data);
      console.log(book);
    } catch (error) {
      console.log(error);
    }
  }

  const postBook = async () => {
    console.log("POST");
    try {
      await requisition.post("books/", book);
      setResultRequisition({message: "Livro criado com sucesso!", type: AlertTypes.SUCCESS});
    } catch (error) {
      console.log(error);
      setResultRequisition({message: "Algum campo inválido!", type: AlertTypes.FAILED});
    }
  }

  const putBook = async () => {
    console.log("PUT");
    try {
      await requisition.put("books/" + book.id, book);
      setResultRequisition({message: "Livro atualizado com sucesso!", type: AlertTypes.SUCCESS});
    } catch (error) {
      console.log(error);
      setResultRequisition({message: "Algum campo inválido!", type: AlertTypes.FAILED});
    }
  }

  const handleInputChange = (field: keyof BookAttributes) => 
    (event: any) => {
      const value = event.target.value;
      setBook((prevBook) => ({
        ...prevBook,
        [field]: value,
      }));
      if(field === "url_image") setImgBook(value);
  };

  return (
    <Page>
      <main className='create-book-page'>
        <form>
          <Field sizeInPercent='100%'>
            <label>Titulo</label>
            <input placeholder='Digite um titulo' value={book.title} onChange={handleInputChange("title")}></input>
          </Field>
          <Field sizeInPercent='45%'>
            <label>Nota</label>
            <select value={book.rating} onChange={handleInputChange("rating")}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </Field>
          <Field sizeInPercent='45%'>
            <label>Status</label>
            <select value={book.status} onChange={handleInputChange("status")}>
              <option value={"TOREAD"}>Não lido</option>
              <option value={"READING"}>Lendo</option>
              <option value={"READED"}>Lido</option>
            </select>
          </Field>
          <Field sizeInPercent='100%'>
            <label>Sinopse</label>
            <textarea placeholder='Informe uma sinopse' value={book.synopse} onChange={handleInputChange("synopse")}></textarea>
          </Field>
          <Field sizeInPercent='100%'>
            <label>Review</label>
            <textarea placeholder='Informe uma review' value={book.review} onChange={handleInputChange("review")}></textarea>
          </Field>
          <Field sizeInPercent='50%'>
            <label>Image</label>
            <input placeholder='Coloque a URL da imagem' value={book.url_image} onChange={handleInputChange("url_image")}></input>
          </Field>
          <Img imgUrl={imgBook}></Img>
        </form>
        <div>
          {resultRequisition.message !== "" &&
            <Alert message={resultRequisition.message} type={resultRequisition.type}></Alert>
          }
        </div>
        <SaveButton requisitionFunction={isNewBook ? postBook : putBook}></SaveButton>
      </main>
    </Page>
  );
}
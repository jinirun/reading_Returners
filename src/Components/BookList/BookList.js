import React from 'react';
import './BookList.css';
import Header from "../Header/Header";
import Book from "../Book/Book";
import axios from 'axios';

function bookList({ books }){ 
    console.log(books);
    return (
        <section>
           <ol>
               {books.data.items.map(book => <Book title={book.volumeInfo.title} author={book.volumeInfo.authors} key={book.id}/>)}
           </ol>
        </section>
    )
}

export default bookList;
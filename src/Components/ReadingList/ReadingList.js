import React from 'react';
import Header from "../Header/Header";
import Book from "../Book/Book";
import axios from 'axios';

function readingList({ books }){ 
    function getBooks(props){
        axios
          .get("https://www.googleapis.com/books/v1/volumes?q=intitle:and%20then%20there%20were%20none")
          .then(response => console.log(response.data))
          .catch(error => console.log(error));
    }
    return (
        <section>
            {/* { getBooks() } */}
           <h4>Title    Author</h4>
           <ol>
               {books.map(book => <Book title={book.title} author={book.author} key={book.id}/>)}
           </ol>
        </section>
    )
}

export default readingList;
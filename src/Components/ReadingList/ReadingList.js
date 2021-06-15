import React from 'react';
import Header from "../Header/Header";
import Book from "../Book/Book";
import axios from 'axios';

function readingList(){ 
    function getBooks(props){
        axios
          .get("https://www.googleapis.com/books/v1/volumes?q=intitle:and%20then%20there%20were%20none")
          .then(response => console.log(response.data))
          .catch(error => console.log(error));
    }
    return (
        <section>
            { getBooks() }
           <h2>Title    Author</h2>
           <ol>
               {/* <Book/> */}
           </ol>
        </section>
    )
}

export default readingList;
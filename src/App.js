// import Container from "../../Components";
import { useState, useEffect } from 'react';
import Header from "./Components/Header/Header";
import BookList from "./Components/BookList/BookList";
import axios from 'axios';
import './App.css';

function App() {
  //data to diplay on the main screen
  // const [books, setBooks] = useState([
  //   {title: "JavaScript and JQuery", author:"Jon Ducket", id:"b001"},
  //   {title: "Eloquent JavaScript", author:"Mavijn Haverbeke", id:"b002"},
  //   {title: "JavaScript: The Definitive Guide", author:"David Flanagan", id:"b003"},
  //   {title: "Learn JavaScript VISUALLY", author:"Ivelin Demirov", id:"b004"}
  // ]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
          .get("https://www.googleapis.com/books/v1/volumes?q=java+Script")
          .then(response => setBooks(response))
          .catch(error => console.log(error));
  }, [])
 //console.log(books.data.items);
  return (
    <div className="App">
      <Header/>
      <main className="display--books"> 
        <BookList books={ books }/>
      </main>
    </div>
  );
}

export default App;

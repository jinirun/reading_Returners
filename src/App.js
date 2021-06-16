// import Container from "../../Components";
import { useState } from 'react';
import Header from "./Components/Header/Header";
import ReadingList from "./Components/ReadingList/ReadingList";
import './App.css';

function App() {
  //data to diplay on the main screen
  const [books, setBooks] = useState([
    {title: "JavaScript and JQuery", author:"Jon Ducket", id:"b001"},
    {title: "Eloquent JavaScript", author:"Mavijn Haverbeke", id:"b002"},
    {title: "JavaScript: The Definitive Guide", author:"David Flanagan", id:"b003"},
    {title: "Learn JavaScript VISUALLY", author:"Ivelin Demirov", id:"b004"}
  ]);

  return (
    <div className="App">
      <Header/>
      <main className="display--books"> 
        <ReadingList books={ books }/>
      </main>
    </div>
  );
}

export default App;

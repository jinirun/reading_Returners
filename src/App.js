// import Container from "../../Components";
import AppBar from "./Components/AppBar/AppBar";
import ReadingList from "./Components/ReadingList/ReadingList";
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <AppBar/> 
        <ReadingList/>
      </main>
    </div>
  );
}

export default App;

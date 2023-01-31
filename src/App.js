import "./App.css";
import SearchBar from "../src/Components/SearchBar/searchBar.js";
import Data from "./Data.json";
import Book from "../src/Components/Book/book"

function App() {
  return (
    <div className="App">
      <div className="Header">
        
        <div className="searchBarSectionLink">
          <div>
            <a href="Something" className="menuLink">
              Adventure
            </a>
          </div>
          <div>
            <a href="Something" className="menuLink">
              Classics
            </a>
          </div>
          <div>
            <a href="Something" className="menuLink">
              Crime
            </a>
          </div>
          <div>
            <a href="Something" className="menuLink">
              Fantasy
            </a>
          </div>
          <div>
            <a href="Something" className="menuLink">
              Horror
            </a>
          </div>
          </div>
        <SearchBar
          placeholder="Search here ..."
          data={Data}
          className="searchBarSection"
        />
      </div>
      <div className="bookSection"><Book/></div>
      
     </div>
  );
}

export default App;

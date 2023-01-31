import React, { useState } from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function SearchBar({ placeholder, data }) {
  const [filtredData, setFiltredData] = useState([]);
  const [typeWord, setTypeWord] = useState("");

  const handleFilter = (event) => {
    const searchType = event.target.value;
    setTypeWord(searchType);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchType.toLowerCase());
    });

    if (searchType === "") {
      setFiltredData([]);
    } else setFiltredData(newFilter);
  };

  const clearSearch = () => {
    setFiltredData([]);
    setTypeWord("");
  };
  return (
    <div className="search">
      <div className="inputsSection">
        <input
          className="inputSection"
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={typeWord}
        ></input>
        <div className="searchIcon">
          {filtredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <HighlightOffIcon className="clearBtn" onClick={clearSearch} />
          )}
        </div>
      </div>
      {filtredData.length !== 0 && (
        <div className="dataResult">
          {filtredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="blank">
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

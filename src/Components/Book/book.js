import React from "react";
import "./book.css";

import Data from "../../Data.json";

function book() {
  return (
    
      <div className="Book">
        {Data &&
          Data.map((book) => {
            return (
              <div className="BookCard">
                <div>
                <h1 className="bookTitle" key={book.id}>
                {book.title}
                </h1>
                <div className="bookAuthor" key={book.id}>
                 Author: {book.author}
                </div>
                
                <div className="bookCountry" key={book.id}>
                Country: {book.country}
                </div>
                <div className="bookYear" key={book.id}>
                Year: {book.year}
                </div>
                <div className="bookLanguage" key={book.id}>
                Language:  {book.language}
                </div>
                <div className="bookPages" key={book.id}>
                Pages: {book.pages}
                </div>
                
                </div>
                <div className="imageSection">
                  <img src={book.imageLink} alt="Book photobook"/>
                  </div>
                  <a href={book.link} key={book.id} target="blank" className="link"> <button className="ButtonWikipedia"> Wikipedia link </button></a>
              </div>
            );
          })}
      </div>
    
  );
}

export default book;

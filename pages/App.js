import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchButton from "../components/Search-button";

const App = () => {
const [films, setFilms] = useState([]);

useEffect(() => {
  fetch(`/api/search`)
    .then(response => response.json())
    .then(jsonResponse => {
    //   console.log("I'm here!", jsonResponse.data.Search[0].Title)
      setFilms(jsonResponse.data.Search);
    });
}, []);

// console.log("this is the films array:", films)
// console.log("this is the first film: films[0]: ", films[0])
// console.log("This is the first film title: films[0].Title: ", films[0]?.Title ?? "no title")

  return (
    <div className="App">
      <Header text="filmjack"/>
      <SearchButton/>
    </div>
  );
};

export default App;

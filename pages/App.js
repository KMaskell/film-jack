import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchButton from "../components/Search-button";

const api_key = ""

const App = () => {
const [films, setFilms] = useState([]);
const [loading, setLoading] = useState(null);
const [errorMessage, setErrorMessage] = useState(null)

useEffect(() => {
}, []);

const search = searchInput => {
    setLoading(true);
    setErrorMessage(null);

    fetch(
        `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${searchInput}&page=1&r=json`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": `${api_key}`,
          },
        }
      )
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.Response === 'True') {
        setFilms(jsonResponse.Search);
        setLoading(false);
      } else {
        setErrorMessage(jsonResponse.Error);
        setLoading(false);
      }
    })
  }
  return (
    <div>
      <Header text="filmjack"/>
      <SearchButton search={search}/>
      <div>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
            films.map((film, index) => (
                <div>
                    <p key={`${index}`}>{film.Title}</p>
                    <div>
                        <img width="50"
                        alt={`(${film.Title} thumbnail)`}
                        src={film.Poster}
                        />
                    </div>
                </div>
            ))
        //   console.log("this will render the first movie:", films[0]?.Title ?? "no title")
        )}
      </div>
    </div>
  );
};

export default App;

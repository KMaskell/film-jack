import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchButton from "../components/Search-button";
import styles from '../styles/App.module.css';

const App = () => {
const [films, setFilms] = useState([]);
const [loading, setLoading] = useState(null);
const [errorMessage, setErrorMessage] = useState(null)

useEffect(() => {
}, []);

const search = searchInput => {
  setLoading(true);
  setErrorMessage(null);
  const body = { searchInput }
  fetch(`http://localhost:3000/api/search`, { body: JSON.stringify(body), method: 'POST' })
  .then(response => response.json())
  .then(jsonResponse => {
    if (jsonResponse.data.Response === 'True') {
      setFilms(jsonResponse.data.Search);
      setLoading(false);
    } else {
      setErrorMessage(jsonResponse.Error);
      setLoading(false);
    }
  })
}
  return (
    <div>
      <div className={styles.fixedSearch}>
        <Header text="filmjack"/>
        <SearchButton search={search}/>
      </div>
      <div className={styles.resultList}>
        {loading && !errorMessage ? (
          <span className={styles.loading}>loading...</span>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
            films.map((film, index) => (
              <div key={index} className={styles.results}>
                <img width="50"
                  alt={`(${film.Title} thumbnail)`}
                  src={film.Poster}
                />
                <p className={styles.title}>{film.Title}</p>
          </div>
            ))
          // console.log("this will render the first movie:", films[0]?.Title ?? "no title")
        )}
      </div>
    </div>
  );
};

export default App;

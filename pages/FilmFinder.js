import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchButton from "../components/Search-button";
import Film from "../components/Film";
import styles from '../styles/App.module.css';

const FilmFinder = () => {
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
      <div className={styles.resultContainer}>
        {loading && !errorMessage ? (
          <span className={styles.loading}>loading...</span>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
            films.map((film, index) => (
              <Film key={index} film={film}/>
            ))
          // console.log("this will render the first movie:", films[0]?.Title ?? "no title")
        )}
      </div>
    </div>
  );
};

export default FilmFinder;

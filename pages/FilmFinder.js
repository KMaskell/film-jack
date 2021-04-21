import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchButton from "../components/Search-button";
import FilmCard from "../components/FilmCard";
import styles from '../styles/App.module.css';

const FilmFinder = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();

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
      <header className={styles.fixedSearch}>
        <Header text="filmjack"/>
        <SearchButton search={search}/>
      </header>
      <div className={styles.resultWindow}>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
            films.map((film, index) => (
              <ul className={styles.filmCardContainers} key={index} >
                <li className={styles.listItem} key={index}>
                    <FilmCard film={film}/>
                </li>
              </ul>
            ))
        )}
      </div>
    </div>
  );
};

export default FilmFinder;

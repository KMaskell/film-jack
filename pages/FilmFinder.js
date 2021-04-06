import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchButton from "../components/Search-button";
import FilmCard from "../components/FilmCard";
import FilmDetail from "../components/FilmDetail";
import styles from '../styles/App.module.css';

const FilmFinder = () => {
const [films, setFilms] = useState([]);
const [loading, setLoading] = useState();
const [errorMessage, setErrorMessage] = useState();
const [selectedFilm, setSelectedFilm] = useState(null);

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

const onClose = () => {
  setSelectedFilm(null);
}

const renderSelectedFilm = () => {
  if (selectedFilm) {
        return (
            <FilmDetail film={selectedFilm} onClose={onClose}/>
        )
  }
}

  return (
    <div>
      <div className={styles.fixedSearch}>
        <Header text="filmjack"/>
        <SearchButton search={search}/>
      </div>
      <div className={styles.resultWindow}>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
            films.map((film, index) => (
              <ul className={styles.filmCardContainers}>
                <li className={styles.listItem} key={index} onClick={() => {
                  setSelectedFilm(film);
                }}>
                    <FilmCard film={film}/>
                </li>
              </ul>
            ))
        )}
          {renderSelectedFilm()}
      </div>
    </div>
  );
};

export default FilmFinder;

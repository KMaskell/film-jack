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
          <div className={styles.filmDetail} >
            <FilmDetail className={styles.filmDetail} film={selectedFilm}/>
            <button className={styles.closeButton}
                width="50"
                alt={"close button"}
                onClick={onClose}>
              close
            </button>
          </div>
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
              <div className={styles.filmCardContainers}>
                <ul className={styles.listItem} key={index} onClick={() => {
                  setSelectedFilm(film);
                }}>
                    <FilmCard film={film}/>
                </ul>
              </div>
            ))
        )}
          {renderSelectedFilm()}
      </div>
    </div>
  );
};

export default FilmFinder;

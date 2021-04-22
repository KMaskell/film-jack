import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchButton from '../components/Search-button';
import DetailsButton from '../components/Details-button';
import LikeButton from '../components/Like-button';
import UnlikeButton from '../components/Unlike-button';
import styles from '../styles/App.module.css';

const PLACEHOLDER_IMAGE = `/placeholderThumbnail.jpeg`;

const FilmFinder = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [faveFilms, setFaveFilms] = useState([]);

  console.log("like - faveFilmsList array", faveFilms);

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

  // const handleLike = (film) => {
  //   setFaveFilms([ ...faveFilms, film.Title]);
  // }

  // const handleUnlike = () => {
  //     const newList = faveFilms.filter((faveFilm) => film.Title !== faveFilm)
  //     setFaveFilms(newList);
  // }

  const thumbnail = filmPoster => {
    return ( filmPoster === "N/A" ? PLACEHOLDER_IMAGE : filmPoster )
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
                <div>
                  <button className={styles.filmCard}>
                      <img
                          className={styles.thumbnail}
                          width="50"
                          alt={`(${film.Title} thumbnail)`}
                          src={thumbnail(film.Poster)}
                      />
                      <p className={styles.title}>{film.Title}</p>
                  </button>
                  <div className={styles.interactionBar}>
                      <DetailsButton film={film}/>
                      <LikeButton />
                      {/* <UnlikeButton /> */}
                  </div>
                </div>
                </li>
              </ul>
            ))
        )}
      </div>
    </div>
  );
};

export default FilmFinder;

import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import SearchButton from '../components/Search-button';
import DetailsButton from '../components/Details-button';
import LikeUnlikeButton from '../components/Like-unlike-button';
import styles from '../styles/App.module.css';

const PLACEHOLDER_IMAGE = `/placeholderThumbnail.jpeg`;

const FilmFinder = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [likedFilms, setLikedFilms] = useState({});

  console.log("faveFilmsList array", likedFilms);

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

  const handleLikeUnlike = (filmId) => {
    const isAlreadyLiked = likedFilms[filmId] ?? false
    isAlreadyLiked ? setLikedFilms({ ...likedFilms, [filmId]: false }) : setLikedFilms({ ...likedFilms, [filmId]: true })
  }

  const thumbnail = filmPoster => {
    return ( filmPoster === "N/A" ? PLACEHOLDER_IMAGE : filmPoster )
  }

  return (
    <div className={styles.wrapper}>
      <NavBar/>
      <SearchButton search={search}/>
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
                      <LikeUnlikeButton isLiked={likedFilms[film.imdbID]} onClick={() => handleLikeUnlike(film.imdbID)}/>
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

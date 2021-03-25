import React from 'react';
import styles from '../styles/FilmDetail.module.css';
import Image from 'next/image';

const DEFAULT_PLACEHOLDER_IMAGE = `/thumbnailPlaceholder.jpeg`;

const FilmDetail = ({ film }) => {
    const poster =
    film.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : film.Poster;
    return (
        <div className={styles.filmDetail}>
            <p className={styles.whatAMovie}>What a movie!</p>
            <img
            className={styles.poster}
            width="50"
            alt={`(${film.Title} thumbnail)`}
            src={poster}
            />
            <p className={styles.title}>{film.Title}</p>
            <p className={styles.title}>{film.Year}</p>
            {/* <p className={styles.title}>{film.Plot}</p> */}
            <p className={styles.title}>(this should be the synopsis) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    );
};

export default FilmDetail;
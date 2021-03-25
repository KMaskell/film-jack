import React from 'react';
import styles from '../styles/FilmCard.module.css';
import Image from 'next/image';

const DEFAULT_PLACEHOLDER_IMAGE = `/thumbnailPlaceholder.jpeg`;

const FilmCard = ({ film }) => {
    const thumbnail =
    film.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : film.Poster;
    return (
        <button className={styles.filmCard}>
            <img
            className={styles.thumbnail}
            width="50"
            alt={`(${film.Title} thumbnail)`}
            src={thumbnail}
            />
            <p className={styles.title}>{film.Title}</p>
            {/* <p>{film.Plot}</p> */}
        </button>
    );
};

export default FilmCard;
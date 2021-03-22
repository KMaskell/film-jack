import React from 'react';
import styles from '../styles/Film.module.css';
import Image from 'next/image';

const DEFAULT_PLACEHOLDER_IMAGE = `/thumbnailPlaceholder.jpeg`;

const Film = ({ film }) => {
    const thumbnail =
    film.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : film.Poster;
    return (
        <div className={styles.filmCard}>
            <img
            className={styles.thumbnail}
            width="50"
            alt={`(${film.Title} thumbnail)`}
            src={thumbnail}
            />
            <p className={styles.title}>{film.Title}</p>
        </div>
    );
};

export default Film;
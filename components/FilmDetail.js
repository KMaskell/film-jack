import React from 'react';
import styles from '../styles/FilmDetail.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';

const DEFAULT_PLACEHOLDER_IMAGE = `/thumbnailPlaceholder.jpeg`;

const FilmDetail = ({ film, onClose }) => {
    const poster =
    film.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : film.Poster;
    return (
        <div className={styles.filmDetail}>
            <button className={styles.closeButton}
                width="50"
                alt={"close button"}
                onClick={onClose}>
            close
            </button>
            <p className={styles.whatAMovie}>What a movie!</p>
            <img
            className={styles.poster}
            width="50"
            alt={`(${film.Title} thumbnail)`}
            src={poster}
            />
            <p className={styles.title}>{film.Title}</p>
            <p className={styles.title}>{film.Year}</p>
            <p className={styles.title}>Director: {film.Director}</p>
            <p className={styles.title}>Synopsis: {film.Plot}</p>
            <p className={styles.title}>Starring: {film.Actors}</p>
        </div>
    );
};

export default FilmDetail;

FilmDetail.propTypes = {
    film: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};

FilmDetail.defaultProps = {
    film: undefined,
};
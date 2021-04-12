import React from 'react';
import styles from '../styles/FilmCard.module.css';
// import Image from 'next/image';
import LikeButton from './Like-button';
import DetailsButton from './Details-button';

const DEFAULT_PLACEHOLDER_IMAGE = `/thumbnailPlaceholder.jpeg`;

const FilmCard = ({ film, onClick }) => {
    const thumbnail =
    film.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : film.Poster;
    return (
        <div>
            <button className={styles.filmCard}>
                <img
                className={styles.thumbnail}
                width="50"
                alt={`(${film.Title} thumbnail)`}
                src={thumbnail}
                />
                <p className={styles.title}>{film.Title}</p>
            </button>
            <div className={styles.filmcardInteractionBar}>
            <DetailsButton onClick={onClick}/>
            <LikeButton/>
            </div>
        </div>
    );
};

export default FilmCard;
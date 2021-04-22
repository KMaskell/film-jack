import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/FilmCard.module.css';
import LikeButton from './Like-button';
import UnlikeButton from './Unlike-button';
import DetailsButton from './Details-button';

const PLACEHOLDER_IMAGE = `/placeholderThumbnail.jpeg`;

const FilmCard = ({ film }) => {
    const isLiked = false;
    const thumbnail =
    film.Poster === "N/A" ? PLACEHOLDER_IMAGE : film.Poster;

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
            <div className={styles.interactionBar}>
                <DetailsButton film={film}/>
                {!isLiked && <LikeButton />}
                {isLiked && <UnlikeButton />}
            </div>
        </div>
    );
};

export default FilmCard;

FilmCard.propTypes = {
    film: PropTypes.object,
};

FilmCard.defaultProps = {
    film: undefined,
};
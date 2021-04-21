import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/FilmCard.module.css';
import LikeButton from './Like-button';
import DetailsButton from './Details-button';
import CommentButton from './Comment-button';

const PLACEHOLDER_IMAGE = `/placeholderThumbnail.jpeg`;

const FilmCard = ({ film, onClick }) => {
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
                <DetailsButton onClick={onClick}/>
                <LikeButton/>
                <CommentButton/>
            </div>
        </div>
    );
};

export default FilmCard;

FilmCard.propTypes = {
    film: PropTypes.object,
    onClick: PropTypes.func.isRequired,
};

FilmCard.defaultProps = {
    film: undefined,
};
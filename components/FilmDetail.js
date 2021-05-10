import React from "react";
import styles from "./filmDetail.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const PLACEHOLDER_IMAGE = `/placeholderThumbnail.jpeg`;

const FilmDetail = ({ film, onClose }) => {
	const poster = film.Poster === "N/A" ? PLACEHOLDER_IMAGE : film.Poster;

	return (
		<div className={styles.filmDetail}>
			<button className={styles.closeButton} onClick={onClose}>
				<FontAwesomeIcon
					icon={faTimesCircle}
					size="lg"
					alt={"information icon"}
				/>
			</button>
			<p className={styles.whatAMovie}>What a movie!</p>
			<img
				className={styles.poster}
				width="50"
				alt={`(${film.Title} thumbnail)`}
				src={poster}
			/>
			<div className={styles.details}>
				<p>{film.Title}</p>
				<p>{film.Year}</p>
				<p>Director: {film.Director}</p>
				<p>Synopsis: {film.Plot}</p>
				<p>Starring: {film.Actors}</p>
			</div>
		</div>
	);
};

export default FilmDetail;

FilmDetail.propTypes = {
	film: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
};

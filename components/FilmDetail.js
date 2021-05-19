import React from "react";
import styles from "../styles/filmDetail.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const PLACEHOLDER_IMAGE = `/placeholderThumbnail.jpeg`;

const FilmDetail = ({ film, onClose }) => {
	const poster = film.Poster === "N/A" ? PLACEHOLDER_IMAGE : film.Poster;

	return (
		<div className={styles.wrapper}>
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
				<ol>
					<li>{film.Title}</li>
					<li>{film.Year}</li>
					<li>{film.Director}</li>
					<li>{film.Plot}</li>
					<li>{film.Actors}</li>
				</ol>
			</div>
		</div>
	);
};

export default FilmDetail;

FilmDetail.propTypes = {
	film: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
};

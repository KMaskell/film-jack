import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Details-Button.module.css";
import FilmDetail from "../components/FilmDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const DetailsButton = ({ film }) => {
	const [loading, setLoading] = useState();
	const [errorMessage, setErrorMessage] = useState();
	const [selectedFilm, setSelectedFilm] = useState();
	const [filmDetail, setFilmDetail] = useState();

	useEffect(() => {}, []);

	const searchFilmDetail = (imdbId) => {
		setLoading(true);
		setErrorMessage(null);
		const body = { imdbId };
		fetch(`http://localhost:3000/api/searchDetail`, {
			body: JSON.stringify(body),
			method: "POST",
		})
			.then((response) => response.json())
			.then((jsonResponse) => {
				if (jsonResponse.data.Response === "True") {
					setFilmDetail(jsonResponse.data);
					setLoading(false);
				} else {
					setErrorMessage(jsonResponse.Error);
					setLoading(false);
				}
			});
	};

	const onClose = () => {
		setSelectedFilm(null);
		setFilmDetail(null);
	};

	const renderFilmDetail = () => {
		if (filmDetail) {
			return <FilmDetail film={filmDetail} onClose={onClose} />;
		}
	};

	return (
		<div>
			<button
				className={styles.detailsButton}
				onClick={() => {
					setSelectedFilm(film);
					searchFilmDetail(film.imdbID);
				}}
			>
				<FontAwesomeIcon
					icon={faInfoCircle}
					size="lg"
					alt={"information icon"}
				/>
			</button>
			{renderFilmDetail()}
		</div>
	);
};

export default DetailsButton;

DetailsButton.propTypes = {
	film: PropTypes.object.isRequired,
};

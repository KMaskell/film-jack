import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SearchButton from "../components/Search-button";
import DetailsButton from "../components/Details-button";
import LikeUnlikeButton from "../components/Like-unlike-button";
import firebase from "firebase/app";
import firebaseClient from "../firebaseClient";
import "firebase/firestore";
import styles from "../styles/App.module.css";

const PLACEHOLDER_IMAGE = `/placeholderThumbnail.jpeg`;

const FilmFinder = () => {
	const [films, setFilms] = useState([]);
	const [loading, setLoading] = useState();
	const [errorMessage, setErrorMessage] = useState();
	const [likedFilms, setLikedFilms] = useState({});
	const thumbnail = (filmPoster) => {
		return filmPoster === "N/A" ? PLACEHOLDER_IMAGE : filmPoster;
	};

	// console.log("faveFilmsList array", likedFilms);
	console.log("films array", films);

	useEffect(() => {}, []);

	firebaseClient();

	const search = (searchInput) => {
		setLoading(true);
		setErrorMessage(null);
		const body = { searchInput };
		fetch(`http://localhost:3000/api/search`, {
			body: JSON.stringify(body),
			method: "POST",
		})
			.then((response) => response.json())
			.then((jsonResponse) => {
				if (jsonResponse.data.Response === "True") {
					setFilms(jsonResponse.data.Search);
					setLoading(false);
				} else {
					setErrorMessage(jsonResponse.Error);
					setLoading(false);
				}
			});
	};

	const handleLikeUnlike = (film) => {
		const database = firebase.firestore();
		const isAlreadyLiked = likedFilms[film.imdbID] ?? false;
		if (isAlreadyLiked) {
			setLikedFilms({ ...likedFilms, [film.imdbID]: false });
			database
				.collection("filmjack")
				.doc("my-fave-films")
				.update({
					[film.Title]: firebase.firestore.FieldValue.delete(),
				})
				.then(() => {
					console.log("Fave film successfully deleted!");
				})
				.catch((error) => {
					console.error("Error removing film: ", error);
				});
		} else {
			setLikedFilms({ ...likedFilms, [film.imdbID]: true });
			database
				.collection("filmjack")
				.doc("my-fave-films")
				.set(
					{
						[film.Title]: {
							imdbID: film.imdbID,
							year: film.Year,
							thumbnail: film.Poster,
						},
					},
					{ merge: film.Title }
				)
				.then(() => {
					console.log("Fave film successfully written!");
				})
				.catch((error) => {
					console.error("Error writing film: ", error);
				});
		}
	};

	return (
		<div className={styles.wrapper}>
			<NavBar />
			<SearchButton search={search} />
			<div className={styles.resultWindow}>
				{loading && !errorMessage ? (
					<span>loading...</span>
				) : errorMessage ? (
					<div>{errorMessage}</div>
				) : (
					films.map((film, index) => (
						<ul className={styles.filmCardContainers} key={index}>
							<li className={styles.listItem} key={index}>
								<div>
									<button className={styles.filmCard}>
										<img
											className={styles.thumbnail}
											width="50"
											alt={`(${film.Title} thumbnail)`}
											src={thumbnail(film.Poster)}
										/>
										<p className={styles.title}>
											{film.Title}
										</p>
									</button>
									<div className={styles.interactionBar}>
										<DetailsButton film={film} />
										<LikeUnlikeButton
											isLiked={likedFilms[film.imdbID]}
											onClick={() =>
												handleLikeUnlike(film)
											}
										/>
									</div>
								</div>
							</li>
						</ul>
					))
				)}
			</div>
		</div>
	);
};

export default FilmFinder;

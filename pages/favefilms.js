import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import firebase from "firebase/app";
import firebaseClient from "../firebaseClient";
import "firebase/firestore";
import styles from "../styles/FaveFilms.module.css";

const PLACEHOLDER_IMAGE = `/placeholderThumbnail.jpeg`;

const FaveFilms = () => {
	const database = firebase.firestore();
	const docRef = database.collection("filmjack").doc("my-fave-films");
	const [faveFilms, setFaveFilms] = useState({});
	firebaseClient();

	useEffect(() => {
		docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					setFaveFilms(doc.data());
					console.log("favefilms db object:", doc.data());
				} else {
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}, []);

	const films = Object.keys(faveFilms).map((filmKey) => {
		const poster =
			faveFilms[filmKey].thumbnail === "N/A"
				? PLACEHOLDER_IMAGE
				: faveFilms[filmKey].thumbnail;
		return (
			<ul className={styles.ul}>
				<li className={styles.li}>
					<img
						width="150"
						alt={`(${filmKey} thumbnail)`}
						src={poster}
					/>
				</li>
			</ul>
		);
	});

	return (
		<div>
			<NavBar />
			<div className={styles.carouselWrapper}>{films}</div>
		</div>
	);
};

export default FaveFilms;

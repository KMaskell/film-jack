import React, { useState, useEffect } from "react";
import NavBar from '../components/NavBar';
import firebase from "firebase/app";
import firebaseClient from "../firebaseClient";
import 'firebase/firestore';
import styles from '../styles/FaveFilms.module.css';

const PLACEHOLDER_IMAGE = `/placeholderThumbnail.jpeg`;

const FaveFilms = () => {
    const database = firebase.firestore()
    const _ = require("lodash");
    const docRef = database.collection("filmjack").doc("my-fave-films");
    const [faveFilms, setFaveFilms] = useState({});
    firebaseClient();

    console.log("This is faveFilms nested object: ", faveFilms);

    useEffect(() => {
        docRef.get().then((doc) => {
            if (doc.exists) {
                setFaveFilms(doc.data())
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    const films = Object.keys(faveFilms).map(filmKey => {
        const poster = faveFilms[filmKey].thumbnail === "N/A" ? PLACEHOLDER_IMAGE : faveFilms[filmKey].thumbnail;
        return (
            <ul>
                <li className={styles.favefilm}>
                    <img
                        width="150"
                        alt={`(${filmKey} thumbnail)`}
                        src={poster}
                    />
                    <div className={styles.faveFilmText}>
                        <p>{filmKey}</p>
                        <p>{faveFilms[filmKey].year}</p>
                    </div>
                </li>
            </ul>
        )
    });

    return (
        <div>
            <NavBar/>
            {films}
        </div>
    )
}

export default FaveFilms;
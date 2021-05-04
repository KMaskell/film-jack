import React, { useState, useEffect } from "react";
import NavBar from '../components/NavBar';
import firebase from "firebase/app";
import firebaseClient from "../firebaseClient";
import 'firebase/firestore';
import styles from '../styles/FaveFilms.module.css';

const FaveFilms = () => {
    const database = firebase.firestore()
    const docRef = database.collection("filmjack").doc("my-fave-films");
    const [faveFilms, setFaveFilms] = useState({});
    firebaseClient();

    // console.log("This is fave films?", faveFilms);

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

    return (
        <div>
            <NavBar/>
            <div>Hello</div>
        </div>
    )
}

export default FaveFilms;
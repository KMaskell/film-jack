import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from '../components/NavBar';
import styles from '../styles/FaveFilms.module.css';

const FaveFilms = () => {
    console.log("this is fave films array")
    return (
        <div>
            <NavBar/>
            <div>( fave films list with comment functionality )</div>
        </div>
    )
}

export default FaveFilms;
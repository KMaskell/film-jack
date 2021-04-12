import React, { useState } from "react";
import styles from '../styles/Details-Button.module.css';

const DetailsButton = ({ onClick }) => {

        return (
            <button className={styles.detailsButton} onClick={onClick}>
                <p>details</p>
            </button>
        )
}

export default DetailsButton;
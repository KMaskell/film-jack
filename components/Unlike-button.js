import React from "react";
import styles from '../styles/Unlike-Button.module.css';

const HEART_ICON = "/heart-icon.png";

const UnlikeButton = () => {
    return (
        <button className={styles.unlikeButton}>
            <img className={styles.redHeart}
                width="20"
                alt={"heart icon"}
                src={HEART_ICON}>
            </img>
        </button>
    )
}

export default UnlikeButton;
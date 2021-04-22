import React from "react";
import styles from '../styles/Like-Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
    return (
        <button className={styles.likeButton}>
            <FontAwesomeIcon
                icon={faThumbsUp}
                size="lg"
                alt={"info icon"}/>
        </button>
    )
}

export default LikeButton;
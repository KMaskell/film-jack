import React, { useState } from "react";
import styles from '../styles/Like-Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const HEART_ICON = "/heart-icon.png";

const LikeButton = () => {
    const [likes, setLikes] = useState(0);

    const addLike = () => {
        var newCount = likes + 1;
        setLikes(newCount);
    }

    const removeLike = () => {
        var newCount = likes - 1;
        setLikes(newCount);
    }

    if (likes === 0) {
        return (
            <button className={styles.likeButton} onClick={addLike} >
                <FontAwesomeIcon
                    icon={faThumbsUp}
                    size="lg"
                    alt={"info icon"}/>
            </button>
        )
    }

    if (likes === 1) {
        return (
            <button className={styles.likeButton} onClick={removeLike} >
                <img className={styles.redHeart}
                    width="20"
                    alt={"heart icon"}
                    src={HEART_ICON}>
                </img>
            </button>
        )
    }
}

export default LikeButton;
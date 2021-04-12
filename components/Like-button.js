import React, { useState } from "react";
import styles from '../styles/Like-Button.module.css';

const RED_HEART = `/redHeart.png`;

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
                <p>like</p>
            </button>
        )
    }

    if (likes === 1) {
        return (
            <button className={styles.likeButton} onClick={removeLike} >
                <img className={styles.redHeart}
                    width="20"
                    alt={"red heart"}
                    src={RED_HEART}>
                </img>
            </button>
        )
    }
}

export default LikeButton;
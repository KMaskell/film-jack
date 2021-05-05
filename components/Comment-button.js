import React, { useState, useEffect } from "react";
import styles from '../styles/Comment-button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const CommentButton = ({ film }) => {
    const [selectedFilm, setSelectedFilm] = useState();

    useEffect(() => {
    }, []);

    const onClose = () => {
        setSelectedFilm(null);
    }

    const renderCommentField = () => {
        return (
            console.log("THIS'LL BE THE COMMENT FIELD!!!")
            // <CommentField film={film} onClose={onClose}/>
        )
    }

    return (
        <div>
            <button className={styles.commentButton} onClick={() => {
                setSelectedFilm(film);
                renderCommentField();
            }} >
                <FontAwesomeIcon
                    icon={faComment}
                    size="lg"
                    alt={"info icon"}/>
            </button>
        </div>
    )
}

export default CommentButton;
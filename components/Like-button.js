import React from "react";
import PropTypes from 'prop-types';
import styles from '../styles/Like-Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const HEART_ICON = "/heart-icon.png";

const LikeButton = ({ likeStatus, onClick }) => {

    if (likeStatus === false) {
        return (
            <button className={styles.likeButton} onClick={onClick}>
                <FontAwesomeIcon
                    icon={faThumbsUp}
                    size="lg"
                    alt={"info icon"}/>
            </button>
        )
    }

    if (likeStatus === true) {
        return (
            <button className={styles.likeButton} onClick={onClick}>
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
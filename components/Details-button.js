import React from "react";
import styles from '../styles/Details-Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const DetailsButton = ({ onClick }) => {
    return (
        <button className={styles.detailsButton} onClick={onClick}>
            <FontAwesomeIcon
                icon={faInfoCircle}
                size="lg"
                alt={"information icon"}/>
        </button>
    )
}

export default DetailsButton;
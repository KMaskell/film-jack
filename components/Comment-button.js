import React from "react";
import styles from "../styles/Comment-Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const CommentButton = () => {
	return (
		<button className={styles.commentButton}>
			<FontAwesomeIcon icon={faComment} size="lg" alt={"info icon"} />
		</button>
	);
};

export default CommentButton;

import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/like-Unlike-Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const HEART_ICON = "/heart-icon.png";

const LikeUnlikeButton = ({ isLiked, onClick }) => {
	return (
		<div>
			{!isLiked && (
				<button className={styles.likeButton} onClick={onClick}>
					<FontAwesomeIcon
						icon={faThumbsUp}
						size="lg"
						alt={"info icon"}
					/>
				</button>
			)}
			{isLiked && (
				<button className={styles.unlikeButton} onClick={onClick}>
					<img
						className={styles.redHeart}
						width="20"
						alt={"heart icon"}
						src={HEART_ICON}
					></img>
				</button>
			)}
		</div>
	);
};

export default LikeUnlikeButton;

LikeUnlikeButton.propTypes = {
	isLiked: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

LikeUnlikeButton.defaultProps = {
	isLiked: false,
};

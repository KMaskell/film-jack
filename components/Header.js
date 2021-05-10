import React from "react";
import styles from "./header.module.css";
import PropTypes from "prop-types";

const Header = ({ text }) => {
	return (
		<header className={styles.header}>
			<h2>{text}</h2>
		</header>
	);
};

export default Header;

Header.propTypes = {
	text: PropTypes.string.isRequired,
};

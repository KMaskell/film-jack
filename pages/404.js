import Link from "next/link";
import styles from "../styles/Custom404.module.css";

const CUSTOM_404_IMAGE = `/404Darth.jpeg`;

export default function Custom404() {
	return (
		<div className={styles.custom404}>
			<h1>404 - Page Not Found, champ</h1>
			<h3>"I find your lack of navigation disturbing..."</h3>
			<img
				className={styles.darth}
				width="50%"
				alt="vader using force"
				src={CUSTOM_404_IMAGE}
			/>
			<button className={styles.button}>
				<Link href="/">
					<a>Go back to the Homepage</a>
				</Link>
			</button>
		</div>
	);
}

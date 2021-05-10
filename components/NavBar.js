import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import firebase from "firebase/app";

const NavBar = () => {
	const router = useRouter();
	const page = router.pathname;

	return (
		<nav className={styles.wrapper}>
			<ol className={styles.navBar}>
				{page === "/authenticated" && (
					<li className={styles.navBarItem}>
						<Link href="/filmfinder">
							<a>film finder</a>
						</Link>
					</li>
				)}
				{page === "/authenticated" && (
					<li className={styles.navBarItem}>
						<Link href="/favefilms">
							<a>fave films</a>
						</Link>
					</li>
				)}
				{page === "/filmfinder" && (
					<li className={styles.navBarItem}>
						<Link href="/favefilms">
							<a>fave films</a>
						</Link>
					</li>
				)}
				{page === "/favefilms" && (
					<li className={styles.navBarItem}>
						<Link href="/filmfinder">
							<a>film finder</a>
						</Link>
					</li>
				)}
				<li className={styles.navBarItem}>
					<Link href="/">
						<a>home</a>
					</Link>
				</li>
				<li
					className={styles.navBarItem}
					onClick={async () => {
						await firebase.auth().signOut();
					}}
				>
					<Link href="/">
						<a>sign out</a>
					</Link>
				</li>
			</ol>
		</nav>
	);
};

export default NavBar;

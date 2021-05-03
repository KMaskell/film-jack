import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import styles from '../styles/Navbar.module.css';
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";

const NavBar = ({session}) => {
    const router = useRouter();
    const page = router.pathname;
    console.log({session})

    return (
        <nav>
            <ol className={styles.navBar}>
                { page === "/authenticated" &&
                    <li className={styles.navBarItem}>
                        <Link href="/filmfinder" >
                            <a>film finder</a>
                        </Link>
                    </li>
                }
                { page === "/authenticated" &&
                    <li className={styles.navBarItem}>
                        <Link href="/favefilms" >
                            <a>fave films</a>
                        </Link>
                    </li>
                }
                { page === "/filmfinder" &&
                    <li className={styles.navBarItem}>
                        <Link href="/favefilms" >
                            <a>fave films</a>
                        </Link>
                    </li>
                }
                { page === "/favefilms" &&
                    <li className={styles.navBarItem}>
                        <Link href="/filmfinder" >
                            <a>film finder</a>
                        </Link>
                    </li>
                }
                <li className={styles.navBarItem} onClick={async () => {
                        await firebase
                        .auth()
                        .signOut();
                    }} >
                    <Link href="/" >
                        <a>sign out</a>
                    </Link>
                </li>
            </ol>
        </nav>
    )
}

export default NavBar;
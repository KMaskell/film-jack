import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import styles from '../styles/Navbar.module.css';

const NavBar = () => {
    const router = useRouter();
    const page = router.pathname;

    return (
        <nav>
            <ol className={styles.navBar}>
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
                            <a>filmfinder</a>
                        </Link>
                    </li>
                }
                <li className={styles.navBarItem}>
                    <Link href="/tbc">
                        <a>something else</a>
                    </Link>
                </li>
                <li className={styles.navBarItem}>
                    <Link href="/tbc">
                        <a>sign out</a>
                    </Link>
                </li>
            </ol>
        </nav>
    )
}

export default NavBar;
import React from 'react';
import Link from "next/link";
import { useAuth } from "../auth";
import styles from '../styles/Home.module.css';

export default function Home() {
  const {user} = useAuth();

    return (
      <div className={styles.wrapper} >
        <p>{`Welcome, ${user ? user.email : "no-one's signed in at the moment"}...`}</p>
        {user &&
          <div className={styles.auth}>
            <button className={styles.button} >
              <Link href="/authenticated">
                <a>enter site</a>
              </Link>
            </button>
          </div>
        }
        {!user &&
          <button className={styles.button} >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </button>
        }
      </div>
    );
}

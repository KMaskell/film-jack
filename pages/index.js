import React from 'react';
import Link from "next/link";
import { useAuth } from "../auth";
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const {user} = useAuth();

    return (
      <div>
        {console.log("this is the user", user)}
        <p>{`Welcome ${user ? user.email : "no-one's signed in at the moment."}`}</p>
        {user &&
          <div className={styles.auth}>
            <button >
              <Link href="/authenticated">
                <a>Let's go the authenticated route</a>
              </Link>
            </button>
          </div>
        }
        {!user &&
          <button className={styles.loginButton} >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </button>
        }
      </div>
    );
}

import styles from "../styles/Home.module.css";
import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import fire from "../config/fire-config";

export default function Home() {
  const [notification, setNotification] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  fire.auth()
  .onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  })

  const handleLogout = () => {
    fire.auth()
      .signOut()
      .then(() => {
        setNotification('Logged out')
        setTimeout(() => {
          setNotification('')
        }, 2000)
      });
  }

    return (
        <div>
          <h2>Welcome to the Homepage.</h2>
          {notification}
          {!loggedIn ?
          <div>
            <Link href="users/create-account">
              <a>Create account </a>
            </Link> | 
            <Link href="/users/login">
              <a> Login</a>
            </Link>
          </div>
          :
          <button onClick={handleLogout}>Logout</button>}
        </div>
    )
}

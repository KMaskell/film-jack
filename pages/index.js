// import Header from "../components/Header";
// import styles from "../styles/Home.module.css";
import React from 'react';
import Link from "next/link";
import { useAuth } from "../auth";

export default function Home(props) {
  const {user} = useAuth();

    return (
      <div>
        <div>
          <h2>Welcome to the Homepage.</h2>
          <p>{`User ID: ${user ? user.uid : "No user signed in"}`}</p>
          <button disabled={!user}>
            <Link href="/authenticated">
              <a>Go to authenticated route</a>
            </Link>
          </button>
          <button disabled={user}>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </button>
        </div>
      </div>
    );
}

import React, { useState } from "react";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import Header from "../components/Header";

export default function Login(){
    firebaseClient();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>
                    Email address
                </label>
                <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id={"emailAddress"}
                value={email} />
            </form>
            <form>
                <label>
                    Password
                </label>
                <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id={"password"}
                value={password} />
            </form>
            <button disabled={email === "" || password === ""}
                onClick={async () => {
                    await firebase
                    .auth().createUserWithEmailAndPassword(email, password)
                    .then(function() {
                        window.location.href = "/"
                    })
                    .catch(function (error) {
                        const message = error.message;
                    console.log("this is the error message:", message)
                    })
                }}>
                    Create Account
            </button>
            <button disabled={email === "" || password === ""}
                onClick={async () => {
                    await firebase
                    .auth().signInWithEmailAndPassword(email, password)
                    .then(function() { window.location.href = "/" })
                    .catch(function (error) {
                        const message = error.message;
                        console.log("this is the error message:", message)
                    })
                }}>
                    Login
            </button>
        </div>
    )
}

import React, { useState } from "react";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import Header from "../components/Header";

export default function Login(){
    firebaseClient();
    // const toast = useToast();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div>
            {/* <Header text="filmjack"/> */}
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
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    id={"pass"}
                    value={pass} />
            </form>
            <button disabled={email === "" || pass === ""}
                onClick={async () => {
                    await firebase
                    .auth().createUserWithEmailAndPassword(email, pass)
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
            <button disabled={email === "" || pass === ""}
                onClick={async () => {
                    await firebase
                    .auth().signInWithEmailAndPassword(email, pass)
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

import React, { useState } from 'react';
import firebaseClient from '../firebaseClient';
import firebase from 'firebase/app';
import 'firebase/auth';
import styles from '../styles/Login.module.css';

export default function Login() {
	firebaseClient();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className={styles.wrapper}>
			<h3>Let's create your account or log you in...</h3>
			<form className={styles.inputField}>
				<input
					className={styles.input}
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					id={'emailAddress'}
					value={email}
				/>
			</form>
			<form className={styles.inputField}>
				<input
					className={styles.input}
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					id={'password'}
					value={password}
				/>
			</form>
			<div className={styles.accountButtons}>
				<button
					className={styles.button}
					disabled={email === '' || password === ''}
					onClick={async () => {
						await firebase
							.auth()
							.createUserWithEmailAndPassword(email, password)
							.then(function () {
								window.location.href = '/';
							})
							.catch(function (error) {
								const message = error.message;
								console.log(
									'this is the error message:',
									message
								);
							});
					}}
				>
					Create account
				</button>
				<button
					className={styles.button}
					disabled={email === '' || password === ''}
					onClick={async () => {
						await firebase
							.auth()
							.signInWithEmailAndPassword(email, password)
							.then(function () {
								window.location.href = '/';
							})
							.catch(function (error) {
								const message = error.message;
								console.log(
									'this is the error message:',
									message
								);
							});
					}}
				>
					Login
				</button>
			</div>
		</div>
	);
}

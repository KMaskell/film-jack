import { AuthProvider } from "../auth";
import Head from 'next/head'
import Header from "../components/Header";
import NavBar from '../components/NavBar';

import "../styles/globals.css";

// const dotenv = require("dotenv").config();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
          <script src="https://kit.fontawesome.com/d2c2f7914d.js" crossOrigin="anonymous"></script>
      </Head>
      <Header text="filmjack"/>
      <NavBar/>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp;

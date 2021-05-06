import { AuthProvider } from "../auth";
import Head from 'next/head'
import Header from "../components/Header";
import "../styles/globals.css";

// const dotenv = require("dotenv").config();
const _ = require("lodash");

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
          <script src="https://kit.fontawesome.com/d2c2f7914d.js" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/lodash/4.13.1/lodash.min.js"></script>
      </Head>
      <Header text="filmjack"/>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp;

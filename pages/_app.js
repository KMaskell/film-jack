import { AuthProvider } from "../auth";
import Header from "../components/Header";

import "../styles/globals.css";

// const dotenv = require("dotenv").config();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header text="filmjack"/>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp;

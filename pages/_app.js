import "../styles/globals.css";
const dotenv = require("dotenv").config();
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

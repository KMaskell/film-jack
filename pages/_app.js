import Head from 'next/head'
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
          <script src="https://kit.fontawesome.com/d2c2f7914d.js" crossOrigin="anonymous"></script>
      </Head>
      <Header text="filmjack"/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;

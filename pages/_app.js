import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Sen&display=swap&apos;);
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

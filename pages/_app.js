import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Career Vyas- The Perfect Guide</title>
        <meta name="google-site-verification" content="aW-3HTlrNOCU0JrumTViUW1OT4CbnvuNdkWMBtpQD14" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Career vyas Careervyas guidance mentorship mentoring platform students school colleges helping online educational education field knowledge exploring options opportunities profiles courses"
        />
        <link rel="icon" href="/favicon.ico" />
        
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Sen&display=swap&apos;);
        </style>
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-LQBE9XG8EP`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LQBE9XG8EP', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

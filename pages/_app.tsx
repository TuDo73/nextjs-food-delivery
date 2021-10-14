import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// Context
import ScreenProvider from "contexts/screen";

// Styles
import { Global } from "@emotion/react";
import { GlobalStyles } from "styles/GlobalStyles";

// Components
import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Food Delivery</title>
      </Head>
      <ScreenProvider>
        <Global styles={GlobalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScreenProvider>
    </>
  );
}
export default MyApp;

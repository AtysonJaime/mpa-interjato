import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MPA - Mercado Produtos Agricolas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default function App(props) {
  return (
    <ChakraProvider>
      <MyApp {...props} />
    </ChakraProvider>
  );
}

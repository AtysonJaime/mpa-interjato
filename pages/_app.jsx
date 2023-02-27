import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const [listProdutos, setListProdutos] = React.useState([]);
  React.useEffect(() => {
    const listagemProdutos = localStorage.getItem("listagemProdutos");
    listagemProdutos === null
      ? setListProdutos(catalogo.produtos)
      : listagemProdutos.length === 0
      ? setListProdutos(catalogo.produtos)
      : setListProdutos(JSON.parse(listagemProdutos));
  }, []);

  return (
    <>
      <Head>
        <title>MPA - Mercado Produtos Agricolas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component
        listProdutos={listProdutos}
        setListProdutos={setListProdutos}
        {...pageProps}
      />
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

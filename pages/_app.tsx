import { ChakraProvider } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import Layout from "../Components/layout";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import "../styles/globals.css";

//Setting up layouts

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Layout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  );
}

export default MyApp;

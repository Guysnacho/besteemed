import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactElement, ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import Layout from "../Components/Layout";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const theme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
  palette: {
    primary: {
      main: "rgba(212,37,176,0.79)",
    },
    secondary: {
      main: "#f75537",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontFamily: "Poiret One",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Poiret One",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Poiret One",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Poiret One",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Poiret One",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Poiret One",
      fontWeight: 700,
    },
  },
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

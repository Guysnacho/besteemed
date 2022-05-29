import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactElement, ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import Layout from "../Components/Layout";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import "../styles/globals.css";

/**
 * Setup for layout use in this app
 * @remarks Setting type for pages with a layout
 * @type
 */
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

/**
 * @remarks Type for properties of a page with a layout
 * @type
 */
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Global theme used, made with https://bareynol.github.io/mui-theme-creator/
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

/**
 * Entry point of the application
 * @function MyApp
 * @remarks Setting type for pages with a layout
 */
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <CssBaseline /> {/*Reset css to a baseline for MUI*/}
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

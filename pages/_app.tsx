import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import Layout from "../Components/Layout";
import { store } from "../redux/store";
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
      main: "rgba(255,130,169,1)",
    },
    secondary: {
      main: "#f75537",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontFamily: "Chaparral Pro",
      fontWeight: 520,
    },
    h2: {
      fontFamily: "Chaparral Pro",
      fontWeight: 520,
    },
    h3: {
      fontFamily: "Chaparral Pro",
      fontWeight: 520,
    },
    h4: {
      fontFamily: "Chaparral Pro",
      fontWeight: 520,
    },
    h5: {
      fontFamily: "Chaparral Pro",
      fontWeight: 520,
    },
    h6: {
      fontFamily: "Chaparral Pro",
      fontWeight: 520,
    },
    body1: {
      fontFamily: "Elido",
      fontSize: 17,
    },
    body2: {
      fontFamily: "Elido",
      fontSize: 17,
    },
  },
});

/**
 * Entry point of the application
 * @function MyApp
 * @remarks Setting type for pages with a layout
 */
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <React.StrictMode>
        <CssBaseline /> {/*Reset css to a baseline for MUI*/}
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}

export default MyApp;

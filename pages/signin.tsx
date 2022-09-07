import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Auth from "../Components/Individual/Auth";
import { supabase } from "../utils/supabaseClient";

/**
 * @fileoverview Admin login page
 * @returns {NextPage} - A Nextjs Page
 */
const SignIn: NextPage = () => {
  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Head>
        {/*Metadate of the page, optimize grid up top*/}
        <title>Sign In - Bosede Adetunji</title>
        <meta name="description" content="Admin Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container>
        <Grid item xs={12} mt={6}>
          <Typography
            variant="h3"
            textAlign="center"
            fontStyle="italic"
            fontSize={matches ? "2.3rem" : undefined}
            mx={matches ? 4 : 8}
          >
            Sign In
          </Typography>
        </Grid>
        <Grid item xs={12} my={matches ? 2 : 5}>
          <Auth />
        </Grid>
        <Grid item xs={12} mb={matches ? 2 : 5}>
          <Typography
            variant="body1"
            fontSize={matches ? ".9rem" : undefined}
            mt={1}
            textAlign="center"
            color={theme.palette.secondary.dark}
          >
            <Link href="/signin">Forgot your password?</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;

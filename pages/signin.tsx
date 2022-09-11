import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Auth from "../Components/Individual/Auth";
import ForgotPass from "../Components/Individual/ForgotPass";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { login } from "../redux/userSlice";
import { supabase } from "../utils/supabaseClient";

/**
 * @fileoverview Admin login page
 * @returns {NextPage} - A Nextjs Page
 */
const SignIn: NextPage = () => {
  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const authed = useAppSelector((state: RootState) => state.user.user != null);
  const dispatch = useAppDispatch(); // Sends actions to redux

  const [forgot, setForgot] = useState(false);
  const [signUp, setSignUp] = useState(false);

  // Reroute if authed
  const router = useRouter();
  useEffect(() => {
    const session = supabase.auth.session();
    if (session !== null && session.user !== null) {
      dispatch(login({ user: session.user, session: session }));
      router.replace("/admin");
    }
  }, [authed, dispatch, router]);

  return (
    <div>
      <Head>
        {/*Metadate of the page, optimize grid up top*/}
        <title>{signUp ? "Sign Up" : "Sign In"} - Bosede Adetunji</title>
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
            {forgot ? "Forgot your password?" : signUp ? "Sign Up" : "Sign In"}
          </Typography>
        </Grid>
        <Grid item xs={12} my={matches ? 2 : 5}>
          {!forgot ? <Auth signUp={signUp} router={router} /> : <ForgotPass />}
        </Grid>
        <Grid item xs={12} mb={matches ? 2 : 5} component="a">
          <Typography
            variant="body1"
            fontSize={matches ? ".9rem" : undefined}
            mt={1}
            textAlign="center"
            color={theme.palette.secondary.dark}
            onClick={(e) => setForgot(!forgot)}
          >
            {forgot ? "Go back" : "Forgot your password?"}
          </Typography>
        </Grid>
        <Grid item xs={12} mb={matches ? 2 : 5} component="a">
          <Typography
            variant="body1"
            fontSize={matches ? ".9rem" : undefined}
            mt={1}
            textAlign="center"
            color={theme.palette.secondary.dark}
            onClick={(e) => setSignUp(!signUp)}
          >
            {signUp ? "Go back" : "Sign Up"}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;

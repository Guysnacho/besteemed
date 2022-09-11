import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { login, logout } from "../redux/userSlice";
import { supabase } from "../utils/supabaseClient";

/**
 * @fileoverview Admin page
 * @returns {NextPage} - A Nextjs Page
 */
const Admin: NextPage = () => {
  //component level state
  const router = useRouter();
  const dispatch = useAppDispatch(); // Sends actions to redux

  //Auth redirect
  useEffect(() => {
    const session = supabase.auth.session();
    if (session == null || session.user == null) {
      dispatch(logout());
      router.replace("/signin");
    }
  }, [dispatch, router]);

  return (
    <div>
      <Head>
        <title>Dashboard - Bosede Adetunji</title>
        <meta name="description" content="Admin Home - Bosede Adetunji" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container>
        <Grid item xs={12} my="30vh">
          <Typography variant="h3" my="auto" textAlign="center">
            Admin Page
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;

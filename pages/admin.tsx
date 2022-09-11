import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import UnderConstruction from "../Components/Individual/UnderConstruction";

/**
 * @fileoverview Admin page
 * @returns {NextPage} - A Nextjs Page
 */
const Admin: NextPage = () => {
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
      <UnderConstruction />
    </div>
  );
};

export default Admin;

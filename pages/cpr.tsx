/**
 * @fileoverview CPR class promo page
 */

import { Box, Button, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const CPR: NextPage = () => {
  const cprlink =
    "mailto:lilyinhishands@ymail.com?subject=CPR%20Training&body=Hello,%20my%20name%20is%20_______%20and%20I%20would%20like%20to%20sign%20up%20for%20a%20CPR%20training%20session.";
  return (
    <>
      <Head>
        {/*Metadate of page*/}
        <title>CPR - Bosede Adetunji</title>
        <meta
          name="description"
          content="Bosede is also a licensed CPR instructor, offering classes to groups and individuals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              textAlign="center"
              fontStyle="italic"
              mx={10}
              my={5}
            >
              Accredited CPR Training
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} mb={2}>
            <Typography variant="h5" textAlign="center" px={2}>
              Save a Life
            </Typography>
            <Typography variant="body1" textAlign="center" px={2}>
              There are many reasons why one would want to get a CPR
              certification. Having this vital skill can be the difference
              between a life lost and and a life saved. Whether you are renewing
              or starting afresh, Bosede Adetunji offers CPR training as a
              registered and accredited instructor!
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                background: `url("https://www.redcross.org/content/dam/redcross/training-services/category-pages/cpr/CPR-Desktop.jpg")`,
                backgroundSize: "1366px 400px",
                height: "100%",
                borderRadius: "15px 0px 0px 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                color="secondary"
                href={cprlink}
                sx={{ height: "28%" }}
              >
                Get in touch today!
              </Button>
            </Box>
          </Grid>
          <Grid item xs={2} md={3}></Grid>
          <Grid item xs={8} md={6} my={5}>
            <Typography variant="h5" textAlign="center">
              What is CPR?
            </Typography>
            <Typography variant="body1" textAlign="center">
              According to the American Heart Association, CPR (Cardiopulmonary
              Resuscitation) is an emergency lifesaving procedure performed when
              the heart stops beating. Immediate CPR can double or triple
              chances of survival after cardiac arrest.
            </Typography>
          </Grid>
          <Grid item xs={2} md={3}></Grid>
          <Grid item xs={2} md={3}></Grid>
          <Grid item xs={8} md={6} my={5}>
            <Typography variant="h5" textAlign="center">
              Why learn CPR?
            </Typography>
            <Typography variant="body1" textAlign="center" my={1}>
              By attending one of our classes you will learn
            </Typography>
            <Typography variant="body1" textAlign="center" mb={1}>
              1. How to operate an Automated External Defibrillator (AED)
            </Typography>
            <Typography variant="body1" textAlign="center" mb={1}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              2. What the "Chain of Survival" is and how to apply it to both
              adults and children if the time comes
            </Typography>
            <Typography variant="body1" textAlign="center" mb={1}>
              3. Move confidently knowing you have the ability to potentially
              save the life of a stranger or family member
            </Typography>
          </Grid>
          <Grid item xs={2} md={3}></Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                background: `url("https://images.unsplash.com/photo-1630964046403-8b745c1e3c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80")`,
                backgroundSize: "1596px 1129px",
                backgroundPosition: "0% 85%",
                height: "15rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                color="secondary"
                href={cprlink}
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't wait, learn today!
              </Button>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default CPR;

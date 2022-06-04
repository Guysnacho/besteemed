import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import CreativeCarousel from "../Components/Individual/CreativeCarousel";
import ImageCollage from "../Components/Individual/ImageCollage";
import type { NextPage } from "next";
import { Box } from "@mui/system";
import Head from "next/head";

/**
 * @fileoverview Website homepage
 * @returns NextPage - A Nextjs Page
 */
const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/*Metadate of the page*/}
        <title>Home - Bosede Adetunji</title>
        <meta
          name="description"
          content="Welcome to the home of an Esteemed Woman!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container component={Card} elevation={3} sx={{ borderRadius: 0 }}>
          <Grid item xs={12} md={8} width="100%" height="100%">
            <ImageCollage />
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{ xs: { p: 3, height: "75%", my: "auto" }, md: { px: 0 } }}
          >
            <Card
              sx={{
                width: "100%",
                my: "auto",
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h6" textAlign="center">
                  Bosede Adetunji
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="justify"
                  p={3}
                  sx={{
                    maxHeight: "20rem",
                    textOverflow: "clip",
                    overflow: "scroll",
                    overflowX: "hidden",
                    overflowY: "auto",
                  }}
                >
                  Bosede Adetunji is a Certified Life and Leadership Coach,
                  Pastor, Author &amp; Motivational Speaker, and empowerer of
                  many. She was coached and certified under the direct
                  leadership of the legendary John C. Maxwell. Bosede equips
                  individuals and organizations with practical tools that enable
                  them to break barriers, maximize their abilities, and amplify
                  their success throughout all walks of life.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h4" textAlign="center" py={10}>
          I am a _______
        </Typography>

        <Grid
          component={Stack}
          direction="row"
          spacing={5}
          xs={12}
          sx={{
            overflowX: "scroll",
            overflowY: "hidden",
            mb: 3,
            p: [0, 4, 4, 4],
          }}
        >
          <CreativeCarousel />
        </Grid>
      </main>
    </>
  );
};

export default Home;

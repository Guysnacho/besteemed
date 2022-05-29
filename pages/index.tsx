import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import banner from "../assets/banner6.png";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

/**
 * @fileoverview Website homepage
 * @returns NextPage - A Nextjs Page
 */
const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <div>
      <Head>
        {" "}
        {/*Metadate of the page*/}
        <title>Home - Bosede Adetunji</title>
        <meta
          name="description"
          content="Welcome to the home of an Esteemed Woman!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Stack
          bgcolor={theme.palette.common.black}
          height="22rem"
          spacing={3}
          direction="row"
        >
          <Grid container>
            <Grid item xs={7} bgcolor={theme.palette.common.white}>
              <Box
                component={Image}
                src={banner}
                alt="Slideshow of Bosede in action"
                objectFit="cover"
                position="relative"
                width="100%"
                height="22rem"
              />
            </Grid>
            <Grid item xs={5} bgcolor={theme.palette.common.white}>
              <Card
                sx={{
                  width: "100%",
                  height: "22rem",
                  justifyContent: "space-around",
                }}
              >
                <CardContent>
                  <CardHeader>Bosede Adetunji</CardHeader>
                  <Typography variant="h6" textAlign="center">
                    An Esteemed Woman
                  </Typography>
                  <Typography variant="body1" textAlign="justify" px={3}>
                    Bosede Adetunji is a Certified Life and Leadership Coach,
                    Pastor, Author &amp; Motivational Speaker, and empowerer of
                    many. She was coached and certified under the direct
                    leadership of the legendary John C. Maxwell. Bosede equips
                    individuals and organizations with practical tools that
                    enable them to break barriers, maximize their abilities, and
                    amplify their success throughout all walks of life.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
        <Typography variant="h4" textAlign="center" py={10}>
          I am a _______
        </Typography>
      </main>
    </div>
  );
};

export default Home;

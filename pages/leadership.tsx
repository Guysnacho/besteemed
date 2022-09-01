/**
 * @fileoverview Leadership mentoring promo page
 */

import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import banner from "../assets/banners/leadership.png";
import type { NextPage } from "next";
import Head from "next/head";

const Services: NextPage = () => {
  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Head>
        <title>Leadership - Bosede Adetunji</title>
        <meta
          name="description"
          content="After recieving training from John C. Maxwell, Bosede provides guidance and leadership training services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container component="main" mt={6}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            textAlign="center"
            fontStyle="italic"
            fontSize={matches ? "2.3rem" : undefined}
            mx={matches ? 4 : 8}
          >
            Wake up the Leader in YOU!
          </Typography>
          <Typography
            variant="body1"
            fontSize={matches ? ".9rem" : undefined}
            width={matches ? "80vw" : "50vw"}
            mx="auto"
            my={5}
          >
            Throughout her career Bosede Adetunji has gained a wealth of
            experience in motivating and leading people. Both as a trained
            leadership coach under John C. Maxwell and as a lifelong public
            speaker she offers a variety of services.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          component={Box}
          sx={{
            background: `url(${banner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            height: matches ? "8rem" : "10rem",
            width: "100vw",
          }}
        >
          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Test</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h5">Test</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;

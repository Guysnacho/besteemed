/**
 * @fileoverview Leadership mentoring promo page
 */

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import banner from "../assets/banners/leadership.png";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const leadershipLink =
  "mailto:lilyinhishands@ymail.com?subject=Leadership%20Training&body=Hello,%20my%20name%20is%20_______%20and%20I%20would%20like%20to%20inquire%20about%20experiencing%20a%20leadership%20training%20session.";
const speakingLink =
  "mailto:lilyinhishands@ymail.com?subject=Speaker%20Events&body=Hello,%20my%20name%20is%20_______%20and%20I%20would%20like%20to%20inquire%20about%20hosting%20a%20speaker%20event.";

const Services: NextPage = () => {
  //App state
  const [hover1, setHover1] = useState(false);

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
          container
          sx={{
            background: `url("data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
            <g mask="url(&quot;#SvgjsMask1005&quot;)" fill="none">
                <path d="M 0,39 C 57.6,79.8 172.8,237.8 288,243 C 403.2,248.2 460.8,72.2 576,65 C 691.2,57.8 748.8,195.6 864,207 C 979.2,218.4 1036.8,132.8 1152,122 C 1267.2,111.2 1382.4,146.8 1440,153L1440 560L0 560z" fill="rgba(247, 184, 241, 0.66)"></path>
                <path d="M 0,473 C 96,443.2 288,313.2 480,324 C 672,334.8 768,533.2 960,527 C 1152,520.8 1344,339.8 1440,293L1440 560L0 560z" fill="rgba(249, 190, 245, 0.87)"></path>
            </g>
            <defs>
                <mask id="SvgjsMask1005">
                    <rect width="1440" height="560" fill="#ffffff"></rect>
                </mask>
            </defs>
        </svg>")`,
            backgroundPosition: "50% 50%",
            py: 5,
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              fontStyle="italic"
              textAlign="center"
              mb={4}
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} px={matches ? 3 : 10} pb={4} mb={8}>
            <Card
              sx={{ width: matches ? "65vw" : "40vw", mx: "auto", pb: 2 }}
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
              elevation={hover1 ? 12 : 5}
            >
              <CardMedia>
                <Image src={banner} alt="Stylish banner" />
              </CardMedia>
              <CardContent>
                <Typography variant={matches ? "h6" : "h4"}>
                  Speaking Events
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={matches ? ".9rem" : undefined}
                  mt={2}
                  sx={{
                    maxHeight: "10rem",
                    textOverflow: "clip",
                    overflow: "scroll",
                    overflowX: "hidden",
                    overflowY: "auto",
                  }}
                >
                  Do you have an empowering event you would like Bosede to speak
                  at? A seminar you feel would be a great fit for the
                  organization? Or anything you feel would be relevant to The
                  Esteemed Woman, we are always available upon inquiry.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    mx: "auto",
                    maxHeight: "10rem",
                    textOverflow: "clip",
                    overflow: "scroll",
                    overflowX: "hidden",
                    overflowY: "auto",
                  }}
                  variant="contained"
                  size="medium"
                  color="info"
                  aria-label="speaking inquiry"
                  href={leadershipLink}
                >
                  Reach Out
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} mb={2}></Grid>
          <Grid item xs={12} md={8} pl={3}>
            <Container
              sx={{
                background: `url(${banner.src})`,
                backgroundSize: matches
                  ? 625 * 1.2 + "px " + 258 * 1.2 + "px"
                  : 625 * 1.65 + "px " + 258 * 1.65 + "px",
                backgroundPosition: "left",
                borderRadius: "20px 0px 0px 20px",
                backgroundRepeat: "repeat-x",
                py: 5,
                px: "auto",
              }}
            >
              <Typography variant={matches ? "h6" : "h4"} textAlign="center">
                Leadership Training
              </Typography>
              <Box textAlign="center">
                <Typography
                  variant="body1"
                  fontSize={matches ? ".9rem" : undefined}
                  width={matches ? "70vw" : "40vw"}
                  mx="auto"
                  py={3}
                >
                  The Esteemed Woman is an organization founded on the
                  empowerment of women around the world, naturally this would
                  lead to some knowledge worth sharing! You can pull from this
                  well of knowledge by signing up for Leadership training.
                </Typography>
                <Button
                  variant="contained"
                  size="medium"
                  color="info"
                  aria-label="speaking inquiry"
                  href={speakingLink}
                >
                  Register Today!
                </Button>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;

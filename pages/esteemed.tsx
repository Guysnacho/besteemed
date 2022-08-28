/* eslint-disable react/no-unescaped-entities */
import FacebookIcon from "@mui/icons-material/Facebook";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Iframe from "react-iframe";
import "../assets/embed";

const Blog: NextPage = () => {
  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // Component Functions - import TikTok css
  useEffect(() => {
    var styles = "@import url('https://www.tiktok.com/embed.js');";
    var newSS = document.createElement("link");
    newSS.rel = "stylesheet";
    newSS.href = "data:text/css," + escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);

    ("Imported TikTok CSS");
  });

  return (
    <div>
      <Head>
        <title>Blog - Bosede Adetunji</title>
        <meta
          name="description"
          content="The home of an international organization made by women, for women."
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
              mx={matches ? 5 : 10}
              my={5}
            >
              Welcome to an International Hub of Empowerment
            </Typography>
          </Grid>
          <Grid item xs={12} my={5}>
            <Typography variant={matches ? "h6" : "h4"} textAlign="center">
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              fontSize={matches ? "1.2rem" : undefined}
              textAlign="center"
              p={matches ? 1 : 3}
              sx={{
                maxHeight: "20rem",
                textOverflow: "clip",
                overflow: "scroll",
                overflowX: "hidden",
                overflowY: "auto",
              }}
            >
              To help women to overcome limitations of Purpose, Vision &
              Mindset. To live a life to their full potential in success &
              wealth!
            </Typography>
          </Grid>
          <Grid item md={7} xs={12} my={5}>
            <Box
              width={matches ? "350px" : "560px"}
              height={matches ? "197px" : "315px"}
              mx="auto"
            >
              <Paper sx={{ m: 0, p: 0 }} elevation={4}>
                <Iframe
                  frameBorder={0}
                  width={matches ? "350px" : "560px"}
                  height={matches ? "197px" : "315px"}
                  url="https://www.youtube.com/embed/8kEuux7ikf8"
                  title="YouTube video player"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                />
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} px={matches ? 2 : 4} my="auto">
            <Typography variant="h5" textAlign="center">
              Get enriched with us on YouTube
            </Typography>
            <Typography variant="body1" textAlign="center">
              Take a second to check out educational and inspirational videos on
              topics like relationships, empowerment and many more! Here you'll
              get to watch past events we've held like the Esteemed Woman
              Conference 2022. You'll also get prime access to Bosede's
              teachings.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ my: 5 }}
                size="large"
                startIcon={<YouTubeIcon />}
                href="https://www.youtube.com/watch?v=8kEuux7ikf8"
                target="_blank"
              >
                <Typography variant="h6" fontStyle="italic">
                  Like and Subscribe!
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} my={4}>
            <Container>
              <script async src="https://www.tiktok.com/embed.js"></script>
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@bosedeadetunji3"
                data-unique-id="bosedeadetunji3"
                data-embed-type="creator"
                style={{ maxWidth: "720px", minWidth: "288px" }}
              >
                <section>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/@bosedeadetunji3?refer=creator_embed"
                  >
                    @bosedeadetunji3
                  </a>
                </section>
              </blockquote>
            </Container>
          </Grid>
          <Grid item xs={12} md={5} px={matches ? 2 : 4} my="auto">
            <Typography variant="h5" textAlign="center">
              Follow us on TikTok
            </Typography>
            <Typography variant="body1" textAlign="center">
              You can also find us on TikTok for fun and bite-sized pieces of
              inspiration! Join the wave
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ my: 5 }}
                size="large"
                startIcon={<MusicNoteIcon />}
                href="https://www.tiktok.com/@bosedeadetunji3?refer=creator_embed"
                target="_blank"
              >
                <Typography variant="h6" fontStyle="italic">
                  TikTok
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} my={4}>
            <Box
              width={matches ? "225px" : "500px"}
              height={matches ? "197px" : "437px"}
              mx="auto"
            >
              {matches ? (
                <Paper sx={{ m: 0, p: 0 }} elevation={4}>
                  <Iframe
                    frameBorder={0}
                    width="225px"
                    height="197px"
                    url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D1993407140816069%26set%3Da.234062453417222&show_text=true&width=225"
                    title="TikTok Page"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                  />
                </Paper>
              ) : (
                <Paper sx={{ m: 0, p: 0 }} elevation={4}>
                  <Iframe
                    frameBorder={0}
                    width="500px"
                    height="437px"
                    url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D1993407140816069%26set%3Da.234062453417222&show_text=true&width=500"
                    title="TikTok Page"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                  />
                </Paper>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={5} px={matches ? 2 : 4} my="auto">
            <Typography variant="h5" textAlign="center">
              Follow us on Facebook
            </Typography>
            <Typography variant="body1" textAlign="center">
              We're live on Facebook too! Here you can find updates on events
              just like YouTube along with updates from our International
              centers like our groups in Lagos, Nigeria and its surrounding
              areas.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ my: 5 }}
                size="large"
                startIcon={<FacebookIcon />}
                href="https://www.facebook.com/BosedeOAdetunji"
                target="_blank"
              >
                <Typography variant="h6" fontStyle="italic">
                  Facebook
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Blog;

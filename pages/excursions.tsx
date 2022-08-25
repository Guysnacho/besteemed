/* eslint-disable react/no-unescaped-entities */
/**
 * @fileoverview Excursion promo page
 */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
/**
 * @returns {NextPage} - A Nextjs Page
 */
const Excursions: NextPage = () => {
  //App state
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Excursions - Bosede Adetunji</title>
        <meta
          name="description"
          content="Esteemed Woman Excursions - An empowering trip to a growing list of destinations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container>
          <Grid item xs={12} mt={6}>
            <Typography
              variant="h3"
              textAlign="center"
              fontStyle="italic"
              fontSize={matches ? "2.3rem" : undefined}
              mx={matches ? 4 : 8}
            >
              The Esteemed Experience
            </Typography>
          </Grid>
          <Grid item xs={12} component="section">
            <Box
              width={matches ? "75vw" : "50vw"}
              maxHeight="250px"
              mx="auto"
              my={3}
              overflow="scroll"
              sx={{ overflowX: "hidden", overflowY: "auto" }}
            >
              <Typography
                variant="body1"
                fontSize={matches ? ".9rem" : undefined}
              >
                Welcome to a new division of the Esteemed Woman. Our goal is to
                empower and lead people to a more fruitful life and our Esteemed
                Experience can be just that for you!
              </Typography>
              <Typography
                variant="body1"
                fontSize={matches ? ".9rem" : undefined}
                mt={2}
              >
                Behind the scenes we are working to organize excursions to
                through our Esteemed Air Trip (Israel/Jordan) and our Esteemed
                Sea Trip (a cruise experience).
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              textAlign="center"
              fontStyle="italic"
              mx={matches ? 4 : 8}
            >
              Current Opportunities
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box overflow="hidden" mb={-1}>
              <svg
                id="visual"
                viewBox="0 0 2160 100"
                width="2160"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <path
                  d="M0 58L51.5 55.7C103 53.3 206 48.7 308.8 45.8C411.7 43 514.3 42 617.2 40C720 38 823 35 925.8 31.8C1028.7 28.7 1131.3 25.3 1234.2 27.2C1337 29 1440 36 1542.8 39C1645.7 42 1748.3 41 1851.2 37.3C1954 33.7 2057 27.3 2108.5 24.2L2160 21L2160 101L2108.5 101C2057 101 1954 101 1851.2 101C1748.3 101 1645.7 101 1542.8 101C1440 101 1337 101 1234.2 101C1131.3 101 1028.7 101 925.8 101C823 101 720 101 617.2 101C514.3 101 411.7 101 308.8 101C206 101 103 101 51.5 101L0 101Z"
                  fill="#9a4560"
                ></path>
                <path
                  d="M0 69L51.5 69.8C103 70.7 206 72.3 308.8 72.8C411.7 73.3 514.3 72.7 617.2 70.8C720 69 823 66 925.8 66.5C1028.7 67 1131.3 71 1234.2 69.8C1337 68.7 1440 62.3 1542.8 57C1645.7 51.7 1748.3 47.3 1851.2 47.7C1954 48 2057 53 2108.5 55.5L2160 58L2160 101L2108.5 101C2057 101 1954 101 1851.2 101C1748.3 101 1645.7 101 1542.8 101C1440 101 1337 101 1234.2 101C1131.3 101 1028.7 101 925.8 101C823 101 720 101 617.2 101C514.3 101 411.7 101 308.8 101C206 101 103 101 51.5 101L0 101Z"
                  fill="#cc6f8c"
                ></path>
                <path
                  d="M0 69L51.5 70.7C103 72.3 206 75.7 308.8 78.2C411.7 80.7 514.3 82.3 617.2 82C720 81.7 823 79.3 925.8 80.3C1028.7 81.3 1131.3 85.7 1234.2 87.7C1337 89.7 1440 89.3 1542.8 87.8C1645.7 86.3 1748.3 83.7 1851.2 79.3C1954 75 2057 69 2108.5 66L2160 63L2160 101L2108.5 101C2057 101 1954 101 1851.2 101C1748.3 101 1645.7 101 1542.8 101C1440 101 1337 101 1234.2 101C1131.3 101 1028.7 101 925.8 101C823 101 720 101 617.2 101C514.3 101 411.7 101 308.8 101C206 101 103 101 51.5 101L0 101Z"
                  fill="#ff9bba"
                ></path>
              </svg>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            mb={3}
            component="section"
            bgcolor={theme.palette.primary.light}
          >
            <Container component="div" sx={{ position: "relative" }}>
              <Stack
                direction="row"
                spacing={5}
                overflow={matches ? "scroll" : undefined}
                sx={{ overflowX: "auto", overflowY: "hidden" }}
                mx={3}
                pb={1}
                mb={4}
              >
                <Box
                  width="100%"
                  component={Paper}
                  elevation={hover1 ? 7 : 1}
                  onMouseEnter={() => setHover1(true)}
                  onMouseLeave={() => setHover1(false)}
                  sx={{
                    background: `url(https://premierworlddiscovery.com/images/img_israeljordan.jpg)`,
                    backgroundSize: matches
                      ? 1080 * 0.4 + "px " + 412 * 0.4 + "px"
                      : 1080 * 0.75 + "px " + 412 * 0.75 + "px",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    height: matches ? "10rem" : "18.7rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    size={matches ? "small" : "large"}
                    color="success"
                    sx={{ mx: 4 }}
                    aria-label="Israel excursion"
                    href=""
                    onClick={() => router.replace("/excursions/#Israel")}
                  >
                    Experience Israel
                  </Button>
                </Box>
                <Box
                  width="100%"
                  component={Paper}
                  elevation={hover2 ? 7 : 1}
                  onMouseEnter={() => setHover2(true)}
                  onMouseLeave={() => setHover2(false)}
                  sx={{
                    background: `url(https://expatfinancial.com/wp-content/uploads/2016/11/Night-lights-of-Amman-capital-of-Jordan-473442842_1258x838.jpeg)`,
                    backgroundSize: matches
                      ? 1089 * 0.4 + "px " + 726 * 0.4 + "px"
                      : 1089 * 0.5 + "px " + 726 * 0.5 + "px",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    height: matches ? "10rem" : "18.7rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    size={matches ? "small" : "large"}
                    color="success"
                    sx={{ mx: 4 }}
                    aria-label="Jordan excursion"
                    href=""
                    onClick={() =>
                      router.replace("/excursions/#Jordan")
                    }
                  >
                    Experience Jordan
                  </Button>
                </Box>
                <Box
                  width="100%"
                  component={Paper}
                  elevation={hover3 ? 7 : 1}
                  onMouseEnter={() => setHover3(true)}
                  onMouseLeave={() => setHover3(false)}
                  sx={{
                    background: `url(https://www.cruisetraveloutlet.com/wp-content/uploads/2020/08/cl-oceania-marina.jpg)`,
                    backgroundSize: matches
                      ? 1004 * 0.4 + "px " + 753 * 0.4 + "px"
                      : 1004 * 0.75 + "px " + 753 * 0.75 + "px",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    height: matches ? "10rem" : "18.7rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    size={matches ? "small" : "large"}
                    color="success"
                    sx={{ mx: 4 }}
                    aria-label="Cruise excursion"
                    href=""
                    onClick={() =>
                      router.replace("/excursions/#Oversea")
                    }
                  >
                    Sea Excursion
                  </Button>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              textAlign="center"
              my={2}
              id="Israel"
            >
              Israel
            </Typography>
          </Grid>
          <Grid item xs={12} md={7} my={2}>
            <Paper
              variant="outlined"
              sx={{
                mx: 3,
                maxHeight: matches ? "15rem" : "9rem",
                overflow: "auto",
              }}
            >
              <Typography
                variant="body1"
                fontSize={matches ? ".9rem" : undefined}
                p={2}
              >
                Jerusalem is the holiest city in the world – holy for Jews,
                Christians, and Muslims. The Old City of Jerusalem is home to
                the Western Wall, the Church of the Holy Sepulchre, and the
                Al-Aqsa Mosque. Along with it's religious significance, there
                are tons of other things to do in Israel.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5} my={2} px={matches ? 4 : 2}>
            <Card>
              <CardMedia sx={{ width: "100%" }}>
                <Box
                  sx={{
                    background: `url(https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/12/shutterstock_148478216-skyline-of-the-old-city-at-he-western-wall-and-temple-mount-in-jerusalem-israel-.jpg)`,
                    backgroundSize: matches
                      ? 768 * 0.52 + "px " + 512 * 0.52 + "px"
                      : 768 * 0.52 + "px " + 512 * 0.52 + "px",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    height: matches ? "8rem" : "10rem",
                  }}
                />
              </CardMedia>
              <Typography variant="caption" sx={{ pl: 1, opacity: "70%" }}>
                © Rade Saptovic / Unsplash
              </Typography>
              <CardContent>
                <Typography
                  variant="body2"
                  fontSize={matches ? ".9rem" : undefined}
                >
                  Discover the Western Wall in Jerusalem
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              textAlign="center"
              my={2}
              id="Jordan"
            >
              Jordan
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} my={2} px={matches ? 4 : 2}>
            <Card>
              <CardMedia sx={{ width: "100%" }}>
                <Box
                  sx={{
                    background: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Couple_in_Front_of_Church.jpg/768px-Couple_in_Front_of_Church.jpg)`,
                    backgroundSize: matches
                      ? 768 * 0.5 + "px " + 512 * 0.5 + "px"
                      : 768 * 0.52 + "px " + 512 * 0.52 + "px",
                    backgroundPosition: "50% 40%",
                    backgroundRepeat: "no-repeat",
                    height: matches ? "8rem" : "10rem",
                  }}
                />
              </CardMedia>
              <Typography variant="caption" sx={{ pl: 1, opacity: "70%" }}>
                © David Bjorgen / Wikipedia
              </Typography>
              <CardContent>
                <Typography
                  variant="body2"
                  fontSize={matches ? ".9rem" : undefined}
                >
                  Explore Mount Nebo
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={7} my={2}>
            <Paper
              variant="outlined"
              sx={{
                mx: 3,
                maxHeight: matches ? "15rem" : "9rem",
                overflow: "auto",
              }}
            >
              <Typography
                variant="body1"
                fontSize={matches ? ".9rem" : undefined}
                p={2}
              >
                Travellers who come will delight at the beauty on offer and
                leave feeling touched by the generosity of its people. From
                stunning natural landscapes to world-renowned historical and
                religious sites, Jordan is a part of the Middle East waiting to
                be discovered.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              textAlign="center"
              my={2}
              id="Oversea"
            >
              Oversea Cruise
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                mx: 3,
                maxHeight: matches ? "15rem" : "9rem",
                overflow: "auto",
              }}
            >
              <Typography
                variant="body1"
                fontSize={matches ? ".9rem" : undefined}
                p={2}
              >
                Cruises are luxury experiences that seem so far away for so many
                people, we hope to make them more accessible through a group of
                fun and likeminded people!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Box overflow="hidden" mb={-3.7} sx={{ transform: "scale(-1,1)" }}>
              <svg
                id="visual"
                viewBox="0 0 2160 100"
                width="2160"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <path
                  d="M0 58L51.5 55.7C103 53.3 206 48.7 308.8 45.8C411.7 43 514.3 42 617.2 40C720 38 823 35 925.8 31.8C1028.7 28.7 1131.3 25.3 1234.2 27.2C1337 29 1440 36 1542.8 39C1645.7 42 1748.3 41 1851.2 37.3C1954 33.7 2057 27.3 2108.5 24.2L2160 21L2160 101L2108.5 101C2057 101 1954 101 1851.2 101C1748.3 101 1645.7 101 1542.8 101C1440 101 1337 101 1234.2 101C1131.3 101 1028.7 101 925.8 101C823 101 720 101 617.2 101C514.3 101 411.7 101 308.8 101C206 101 103 101 51.5 101L0 101Z"
                  fill="#9a4560"
                ></path>
                <path
                  d="M0 69L51.5 69.8C103 70.7 206 72.3 308.8 72.8C411.7 73.3 514.3 72.7 617.2 70.8C720 69 823 66 925.8 66.5C1028.7 67 1131.3 71 1234.2 69.8C1337 68.7 1440 62.3 1542.8 57C1645.7 51.7 1748.3 47.3 1851.2 47.7C1954 48 2057 53 2108.5 55.5L2160 58L2160 101L2108.5 101C2057 101 1954 101 1851.2 101C1748.3 101 1645.7 101 1542.8 101C1440 101 1337 101 1234.2 101C1131.3 101 1028.7 101 925.8 101C823 101 720 101 617.2 101C514.3 101 411.7 101 308.8 101C206 101 103 101 51.5 101L0 101Z"
                  fill="#cc6f8c"
                ></path>
                <path
                  d="M0 69L51.5 70.7C103 72.3 206 75.7 308.8 78.2C411.7 80.7 514.3 82.3 617.2 82C720 81.7 823 79.3 925.8 80.3C1028.7 81.3 1131.3 85.7 1234.2 87.7C1337 89.7 1440 89.3 1542.8 87.8C1645.7 86.3 1748.3 83.7 1851.2 79.3C1954 75 2057 69 2108.5 66L2160 63L2160 101L2108.5 101C2057 101 1954 101 1851.2 101C1748.3 101 1645.7 101 1542.8 101C1440 101 1337 101 1234.2 101C1131.3 101 1028.7 101 925.8 101C823 101 720 101 617.2 101C514.3 101 411.7 101 308.8 101C206 101 103 101 51.5 101L0 101Z"
                  fill="#ff9bba"
                ></path>
              </svg>
            </Box>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Excursions;

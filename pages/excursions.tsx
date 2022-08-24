/**
 * @fileoverview Excursion promo page
 */
import {
  Box,
  Button,
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
/**
 * @returns {NextPage} - A Nextjs Page
 */
const Excursions: NextPage = () => {
  //App state

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
              <Typography variant="body1">
                Welcome to a new division of the Esteemed Woman. Our goal is to
                empower and lead people to a more fruitful life and our Esteemed
                Experience can be just that for you!
              </Typography>
              <Typography variant="body1" mt={2}>
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
          <Grid item xs={12} my={3} component="section">
            <Stack
              direction="row"
              spacing={5}
              overflow={matches ? "scroll" : undefined}
              sx={{ overflowX: "auto", overflowY: "hidden" }}
              mx={3}
            >
              <Box
                width="100%"
                component={Paper}
                elevation={5}
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
                  onClick={() => alert("You wanna go to Israel I seeeeee 🇮🇱")}
                >
                  Experience Israel
                </Button>
              </Box>
              <Box
                width="100%"
                component={Paper}
                elevation={5}
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
                  onClick={() => alert("You wanna go to Jordan I seeeeee")}
                >
                  Experience Jordan
                </Button>
              </Box>
              <Box
                width="100%"
                component={Paper}
                elevation={5}
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
                  onClick={() => alert("You wanna go on a lil boat I seee")}
                >
                  Sea Excursion
                </Button>
              </Box>
            </Stack>
            <Container component="div" sx={{}}></Container>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Excursions;

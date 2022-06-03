import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import banner from "../assets/banner-long.png";
import banner2 from "../assets/banner2.png";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.png";
import background from "../assets/background.png";
import type { NextPage } from "next";
import Head from "next/head";
import ImageCollage from "../Components/Individual/ImageCollage";
import { Box } from "@mui/system";
import CreativeCarousel, {
  CarouselProps,
} from "../Components/Individual/CreativeCarousel";

/**
 * @fileoverview Website homepage
 * @returns NextPage - A Nextjs Page
 */

//Data for populating carousel
const carouselData = [
  {
    src: banner,
    heading: "Author",
    body: "Bosede is a published author and continues to write for the growth of others but also for herself. Her subjects range from spirituality and memoirs to self-help and empowerment. You can gleam some of her work in the bookstore here",
    link: "/bookstore"
  },
  {
    src: banner4,
    heading: "Trailblazer",
    body: "This esteemed woman leads by example. This means marching with those she wants to protect and proving that anytihng is possible with enough passion and dedication!",
    link: "/esteemed"
  },
  {
    src: background,
    heading: "Motivational Speaker",
    body: "Through talks in person and online in the US and to Esteemed Woman groups across the globe, Bosede lifts people up and motivates them to chase their ideas and goals. Check out her outlets here!",
    link: "/esteemed"
  },
  {
    src: banner5,
    heading: "Leadership Coach",
    body: "She was coached and certified under the leadership of John C. Maxwell. Bosede equips individuals and organizations with practical tools to break barriers, maximize their strengths, and amplify their success throughout all walks of life.",
    link: "leadership"
  },
  {
    src: banner2,
    heading: "Licensed CPR Instructor",
    body: "Bosede is also a licensed CPR instructor, offering classes to groups and individuals looking for a certification. Whether its required for work or if you just want the skill, schedule a class today!",
    link: "/cpr"
  },
];
const Home: NextPage = () => {
  return (
    <>
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

        <Box
          component={Stack}
          direction="row"
          spacing={5}
          sx={{
            overflowX: "scroll",
            overflowY: "hidden",
            mb: 3,
            p: [0, 4, 4, 4],
          }}
        >
          {carouselData.map((item: CarouselProps) => (
            <CreativeCarousel
            key={item.heading}
            src={item.src}
            heading={item.heading}
            body={item.body}
            link={item.link}
          />
          ))}
        </Box>
      </main>
    </>
  );
};

export default Home;

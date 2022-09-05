import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import banner from "../assets/banners/banner-long.webp";
import banner2 from "../assets/banners/banner2.webp";
import banner3 from "../assets/banners/banner3.webp";
import banner5 from "../assets/banners/banner5.webp";
import banner6 from "../assets/banners/banner6.webp";
import blog2 from "../assets/banners/blog2.webp";
import CreativeCard from "../Components/Individual/CreativeCard";

/**
 * @fileoverview Website homepage
 * @returns {NextPage} - A Nextjs Page
 */

//Data for populating carousel
const carouselData = [
  {
    src: banner,
    heading: "Author",
    body: "Bosede is a published author and continues to write for the growth of others but also for herself. Her subjects range from spirituality and memoirs to self-help and empowerment. You can gleam some of her work in the bookstore here",
    link: "/bookstore",
  },
  {
    src: banner3,
    heading: "Trailblazer",
    body: "This esteemed woman leads by example. This means marching with those she wants to protect and proving that anytihng is possible with enough passion and dedication!",
    link: "/esteemed",
  },
  {
    src: blog2,
    heading: "Motivational Speaker",
    body: "Through talks in person and online in the US and to Esteemed Woman groups across the globe, Bosede lifts people up and motivates them to chase their ideas and goals. Check out her outlets here!",
    link: "/esteemed",
  },
  {
    src: banner5,
    heading: "Leadership Coach",
    body: "She was coached and certified under the leadership of John C. Maxwell. Bosede equips individuals and organizations with practical tools to break barriers, maximize their strengths, and amplify their success throughout all walks of life.",
    link: "leadership",
  },
  {
    src: banner2,
    heading: "Licensed CPR Instructor",
    body: "Bosede is also a licensed CPR instructor, offering classes to groups and individuals looking for a certification. Whether its required for work or if you just want the skill, schedule a class today!",
    link: "/cpr",
  },
];

const Home: NextPage = () => {
  //App state
  const [currentSlide, setCurrentSlide] = useState(0); //Tracking the page of the pagination
  const [refCallback, slider] = useKeenSlider(
    {
      initial: 0,
      slides: carouselData.length,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const theme = useTheme();

  //Media query to check if we're below md viewport width
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // Functions
  const goBack = (e: any) => {
    e.stopPropagation() || slider.current?.prev();
  };

  const goForward = (e: any) => {
    e.stopPropagation() || slider.current?.next();
  };

  return (
    <div>
      <Head>
        {/*Metadate of the page, optimize grid up top*/}
        <title>Home - Bosede Adetunji</title>
        <meta
          name="description"
          content="Welcome to the home of an Esteemed Woman!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                background: `url(${banner6.src})`,
                backgroundSize: matches
                  ? 1080 * 0.8 + "px " + 412 * 0.8 + "px"
                  : 1080 * 1.5 + "px " + 412 * 1.5 + "px",
                backgroundPosition: "40% 45%",
                height: matches ? "20rem" : "24rem",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" textAlign="center" my={6}>
              Bosede Adetunji
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ xs: { p: 3, my: "auto" }, md: { px: 0 } }}>
            <Card
              sx={{
                width: "60%",
                mx: "auto",
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant={matches ? "h6" : "h4"} textAlign="center">
                  An Esteemed Woman
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={matches ? ".9rem" : undefined}
                  textAlign="center"
                  p={matches ? 1 : 3}
                  sx={{
                    maxHeight: "15rem",
                    textOverflow: "clip",
                    overflow: "scroll",
                    overflowX: "hidden",
                    overflowY: "auto",
                  }}
                >
                  Bosede Adetunji is a Certified Life and Leadership Coach,
                  Pastor, Author, Motivational Speaker, and empowerer of many as
                  the convener of The Esteemed Woman. She was coached and
                  certified under the direct leadership of the legendary John C.
                  Maxwell. Bosede equips individuals and organizations with
                  practical tools that enable them to break barriers, maximize
                  their abilities, and amplify their success throughout all
                  walks of life.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" textAlign="center" py={10}>
              I am a _______
            </Typography>
          </Grid>

          <Grid item xs={2} md={3} display="flex" alignItems="center">
            <IconButton
              onClick={goBack}
              disabled={currentSlide === 0}
              sx={{ mx: "auto" }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={8}
            md={6}
            flexDirection="row"
            flexWrap="nowrap"
            ref={refCallback}
            position="relative"
            className="keen-slider"
            sx={{
              overflowX: "hidden",
              overflowY: "hidden",
              mb: 3,
            }}
          >
            {carouselData.map((item) => (
              <CreativeCard
                key={item.heading}
                src={item.src}
                heading={item.heading}
                body={item.body}
                link={item.link}
                className="keen-slider__slide"
              />
            ))}
          </Grid>

          <Grid item xs={2} md={3} display="flex" alignItems="center">
            <IconButton
              onClick={goForward}
              disabled={currentSlide === 4}
              sx={{ mx: "auto" }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                fontStyle="italic"
                textAlign="center"
                py={10}
              >
                Testimonials
              </Typography>
            </Grid>
            <Grid item xs={12} px={10} pb={4} mb={8}>
              <Card elevation={3}>
                <Stack
                  direction={matches ? "column" : "row"}
                  divider={
                    <FormatQuoteIcon color="primary" sx={{ opacity: "50%" }} />
                  }
                  justifyContent="space-between"
                  alignItems="center"
                  mb={-1}
                >
                  <Box
                    width={matches ? "100%" : "50%"}
                    sx={{
                      background: `url(${banner.src})`,
                      backgroundSize: matches
                        ? 1080 * 0.4 + "px " + 412 * 0.4 + "px"
                        : 1080 * 0.75 + "px " + 412 * 0.75 + "px",
                      backgroundPosition: "40% 50%",
                      backgroundRepeat: "no-repeat",
                      height: matches ? "10rem" : "18.7rem",
                    }}
                  />
                  <Box width="80%" pr={matches ? undefined : 5}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      my={2}
                      fontSize={matches ? "1rem" : undefined}
                    >
                      I highly recommend that all women should buy and read this
                      book
                    </Typography>
                    <Typography
                      variant="body1"
                      textAlign="center"
                      mt={2}
                      fontSize={matches ? ".9rem" : undefined}
                    >
                      This book stands unique among all books written on women
                      by various authors. In the Esteemed Woman, the author
                      encourages women of all ages to rise up to fulfil their
                      destiny because not...
                    </Typography>
                    <Box
                      textAlign="center"
                      mt={2}
                      fontSize={matches ? ".9rem" : undefined}
                    >
                      <Link
                        variant="body1"
                        textAlign="center"
                        color="primary"
                        underline="hover"
                        href="https://www.amazon.com/review/R26HU5DFZTWJYC/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B07CVL5T68"
                        target="_blank"
                        rel="noopener"
                        fontSize={matches ? ".9rem" : undefined}
                      >
                        Read the full review
                      </Link>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      fontStyle="italic"
                      textAlign="center"
                      fontSize={matches ? ".85rem" : undefined}
                      my={2}
                    >
                      Emmanuel Adegboye - May 21, 2018
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Home;

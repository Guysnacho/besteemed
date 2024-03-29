import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CreativeCard from "../Components/Individual/CreativeCard";
import InterestForm from "../Components/Individual/InterestForm";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { PaginationOptions } from "swiper/types";
import { bannerUrls } from "../utils/constants";

/**
 * @fileoverview Website homepage
 * @returns {NextPage} - A Nextjs Page
 */

//Data for populating carousel
const carouselData = [
  {
    src: bannerUrls.BANNER_LONG,
    heading: "Author",
    body: "Bosede is a published author and continues to write for the growth of others but also for herself. Her subjects range from spirituality and memoirs to self-help and empowerment. You can gleam some of her work in the bookstore here",
    link: "/bookstore",
  },
  {
    src: bannerUrls.BANNER_3,
    heading: "Trailblazer",
    body: "This esteemed woman leads by example. This means marching with those she wants to protect and proving that anytihng is possible with enough passion and dedication!",
    link: "/esteemed",
  },
  {
    src: bannerUrls.BLOG_1,
    heading: "Motivational Speaker",
    body: "Through talks in person and online in the US and to Esteemed Woman groups across the globe, Bosede lifts people up and motivates them to chase their ideas and goals. Check out her outlets here!",
    link: "/esteemed",
  },
  {
    src: bannerUrls.BANNER_5,
    heading: "Leadership Coach",
    body: "She was coached and certified under the leadership of John C. Maxwell. Bosede equips individuals and organizations with practical tools to break barriers, maximize their strengths, and amplify their success throughout all walks of life.",
    link: "leadership",
  },
  {
    src: bannerUrls.BANNER_2,
    heading: "Licensed CPR Instructor",
    body: "Bosede is also a licensed CPR instructor, offering classes to groups and individuals looking for a certification. Whether its required for work or if you just want the skill, schedule a class today!",
    link: "/cpr",
  },
];

const pagOptions: PaginationOptions = {
  enabled: true,
  clickable: true,
  type: "bullets",
};

const Home: NextPage = () => {
  //App state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  //Media query to check if we're below md viewport width
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
          <InterestForm
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
          <Grid item xs={12}>
            <Box
              sx={{
                background: `url(${bannerUrls.BANNER_6})`,
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
          <Grid item xs={12}>
            <Swiper
              spaceBetween={45}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={pagOptions}
              loop
              modules={[Autoplay, Pagination, A11y]}
            >
              {carouselData.map((item) => (
                <SwiperSlide key={item.heading}>
                  <CreativeCard
                    key={item.heading}
                    src={item.src}
                    heading={item.heading}
                    body={item.body}
                    link={item.link}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                my={2}
                textAlign="center"
                variant={matches ? "h6" : "h4"}
                fontSize={matches ? "1rem" : undefined}
              >
                Sign up for future announcements and features coming soon!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  aria-label="express-interest"
                  onClick={handleOpen}
                  size="large"
                  sx={{
                    my: { xs: 2, sm: 4, md: 8 },
                    color: theme.palette.common.white,
                  }}
                >
                  Join the Crew! 🤗
                </Button>
              </Box>
            </Grid>
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
                      background: `url(https://zhsexifadjbwxnndgsmc.supabase.co/storage/v1/object/public/assets/banners/banner-long.webp)`,
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

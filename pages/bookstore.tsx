/**
 * @fileoverview Book promo page
 */
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Card,
  CardActions,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import book1 from "../assets/books/1Esteemed.webp";
import IconLink from "../Components/Individual/IconLink";

/**
 * @fileoverview Bookstore page
 * @returns {NextPage} - A Nextjs Page
 */
const Bookstore: NextPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Head>
        <title>Bookstore - Bosede Adetunji</title>
        <meta
          name="description"
          content="Bosede has written and continues to write about her life and experiences. Enrich your library"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container>
          <Grid item xs={12} my={4}>
            <Typography
              variant="h3"
              textAlign="center"
              fontStyle="italic"
              mx={15}
            >
              A Collection of Inspiring Books for Women Leaders
            </Typography>
          </Grid>
          <Grid container my={7}>
            <Grid item xs={12} md={6} my="auto" sx={matches ? { mb: 5 } : {}}>
              <Card
                sx={{
                  width: "23rem",
                  mx: "auto",
                }}
                elevation={17}
              >
                <CardMedia
                  sx={{ width: "100%", justifyContent: "space-around" }}
                >
                  <Image
                    alt="Bosede Book"
                    src={book1}
                    layout="responsive"
                    objectPosition="top"
                  />
                </CardMedia>
                <CardActions>
                  <Stack
                    direction="row"
                    width="100%"
                    justifyContent="space-evenly"
                  >
                    <IconLink
                      href="https://www.amazon.com/Esteemed-Woman-Guiding-Celebrate-Womanhood-ebook/dp/B07CVL5T68/ref=sr_1_2?qid=1654737068&refinements=p_27%3ABosede+Adetunji&s=books&sr=1-2&text=Bosede+Adetunji"
                      child={<ShoppingCartOutlinedIcon />}
                    />
                    <IconLink
                      href="https://www.amazon.com/Esteemed-Woman-Guiding-Celebrate-Womanhood-ebook/product-reviews/B07CVL5T68/"
                      child={<RateReviewOutlinedIcon />}
                    />
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="column" spacing={3} sx={{ px: 7, mx: 5 }}>
                <Typography
                  variant="caption"
                  textAlign="center"
                  fontSize="1.5rem"
                  sx={{ opacity: "65%" }}
                >
                  #1
                </Typography>
                <Typography variant="h3" textAlign="center">
                  The Esteemed Woman
                </Typography>
                <Typography variant="subtitle1" textAlign="center">
                  Guiding Steps to Overcoming Obstacles of Life
                </Typography>
                <Typography variant="body1">
                  We are all uniquely created to fulfill our destinies and
                  purposes. There are no two DNA strands or fingerprints. In the
                  same manner, you are an original, and there is no other
                  duplicate. In your quest to fulfill your purpose, you may
                  encounter roadblocks that challenge your faith. You may be
                  discouraged and be tempted to throw in the towel. No two paths
                  are identical. While some may be rocky, others may be smooth.
                  Perhaps yours was miry or you had some challenges that seemed
                  rigid and hard as concrete. Whatever your path may look like,
                  be encouraged as you read this book.
                </Typography>
                <Typography variant="body1">
                  &ldquo;From the Miry Clay&rdquo; is a practical guide that is
                  equipped with real-life applications, scenarios, and stories
                  that are geared to see women leaders through any situation
                  they may find yourself in. Each chapter is highlighted with
                  some prayer points that are designed to strengthen your faith
                  and encourage you as you walk your path. “Many are the
                  afflictions of the righteous, but God delivers him from them
                  all.” (Psalms 34:19)
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Bookstore;

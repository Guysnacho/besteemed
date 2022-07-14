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
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import bookCover1 from "../assets/books/1Esteemed.webp";
import bookCover2 from "../assets/books/2Leaders.webp";
import bookCover3 from "../assets/books/3From.webp";
import books from "../assets/data.json";
import IconLink from "../Components/Individual/IconLink";

const bookData = [...books.books];
const bookCovers = [bookCover1, bookCover2, bookCover3];
/**
 * @returns {NextPage} - A Nextjs Page
 */
const Bookstore: NextPage = () => {
  //App state
  const [page, setPage] = useState(1); //Tracking the page of the pagination
  const theme = useTheme();

  //Media query to check if we're below md viewport width
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
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
          <Grid container my={7} sx={!matches ? { mb: 15 } : {}}>
            <Grid item xs={12} md={6} my="auto">
              <Card
                sx={{
                  width: "23rem",
                  mx: "auto",
                  mb: 5,
                }}
                elevation={17}
              >
                <CardMedia
                  sx={{ width: "100%", justifyContent: "space-around" }}
                >
                  <Image
                    alt="Bosede Book"
                    src={bookCovers[page - 1]}
                    layout="responsive"
                    objectPosition="top"
                    loading="eager"
                    priority
                  />
                </CardMedia>
                <CardActions>
                  <Stack
                    direction="row"
                    width="100%"
                    justifyContent="space-evenly"
                  >
                    <IconLink
                      href={bookData[page - 1].shoppingLink}
                      child={<ShoppingCartOutlinedIcon />}
                    />
                    <IconLink
                      href={bookData[page - 1].reviewLink}
                      child={<RateReviewOutlinedIcon />}
                    />
                  </Stack>
                </CardActions>
              </Card>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-around"
                sx={!matches ? { mt: 5 } : {}}
              >
                <Pagination
                  count={3}
                  page={page}
                  onChange={handleChange}
                  variant="outlined"
                  color="primary"
                  size="large"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} mt={!matches ? undefined : 5}>
              <Stack direction="column" spacing={3} sx={{ px: 7, mx: 5 }}>
                <Typography
                  variant="caption"
                  textAlign="center"
                  fontSize="1.5rem"
                  sx={{ opacity: "65%" }}
                >
                  #{page}
                </Typography>
                <Typography variant="h4" textAlign="center">
                  {bookData[page - 1].title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontStyle="oblique"
                  textAlign="center"
                >
                  {bookData[page - 1].subtitle}
                </Typography>
                <Typography variant="body1">
                  {bookData[page - 1].body1}
                </Typography>
                <Typography variant="body1">
                  {bookData[page - 1].body2}
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

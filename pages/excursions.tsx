/**
 * @fileoverview Excursion promo page
 */
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import bookCover1 from "../assets/books/1Esteemed.webp";
import bookCover2 from "../assets/books/2Leaders.webp";
import bookCover3 from "../assets/books/3From.webp";
import books from "../assets/data.json";

const bookData = [...books.books];
const bookCovers = [bookCover1, bookCover2, bookCover3];
/**
 * @returns {NextPage} - A Nextjs Page
 */
const Bookstore: NextPage = () => {
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
        <Typography variant="h6" textAlign="center">
          Excursions
        </Typography>
      </main>
    </div>
  );
};

export default Bookstore;

import {
  Card,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/userSlice";
import { supabase } from "../utils/supabaseClient";

/**
 * @fileoverview Admin page
 * @returns {NextPage} - A Nextjs Page
 */
const Admin: NextPage = () => {
  //component level state
  const router = useRouter();
  const dispatch = useAppDispatch(); // Sends actions to redux
  const store = useAppSelector((state) => state.user);

  //Auth redirect
  useEffect(() => {
    const session = supabase.auth.session();
    if (session == null || session.user == null) {
      dispatch(logout());
      router.replace("/signin");
    } else {
      getData();
    }
  });

  //component functions
  const getData = () => {
    console.log("Get supabase data");
  };

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  function createData(name: string, email: string, interests: string[]) {
    return { name, email, interests };
  }

  const rows = [
    createData("Samuel Adetunji", "guysnacho2@gmail.com", ["CPR", "Israel"]),
    createData("Samuel Adetunji", "guysnacho2@gmail.com", ["CPR", "Israel"]),
    createData("Samuel Adetunji", "guysnacho2@gmail.com", ["CPR", "Israel"]),
  ];

  return (
    <div>
      <Head>
        <title>Dashboard - Bosede Adetunji</title>
        <meta name="description" content="Admin Home - Bosede Adetunji" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container>
        <Grid item xs={12} my="5vh">
          <Typography variant="h3" my="auto" textAlign="center">
            Welcome {store.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          my="5vh"
          maxWidth={matches ? "80%" : "95%"}
          mx="auto"
          px={matches ? 0 : 3}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Client</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Interests</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">
                      {row.interests.map((item) => `${item}, `)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          my="5vh"
          maxWidth={matches ? "80vw" : "95vw"}
          mx="auto"
          px={matches ? 0 : 3}
        >
          <Card>
            <Typography
              variant={matches ? "h6" : "h5"}
              textAlign="center"
              my={matches ? 2 : 4}
            >
              Quick Stats
            </Typography>
            <Typography
              variant="body1"
              my={matches ? 2 : 4}
              fontSize={matches ? ".9rem" : undefined}
            >
              You have 3 users
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;

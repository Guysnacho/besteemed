//@ts-nocheck
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
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/userSlice";
import { supabase } from "../utils/supabaseClient";

type Profiles = {
  fname: string;
  lname: string;
  email: string;
  interests: string;
  updated_at?: Date;
  role_id?: number;
};

/**
 * @fileoverview Admin page
 * @returns {NextPage} - A Nextjs Page
 */
const Admin: NextPage = () => {
  //component level state
  const router = useRouter();
  const dispatch = useAppDispatch(); // Sends actions to redux
  const store = useAppSelector((state) => state.user);
  const [clients, setClients] = useState([]);

  //Auth redirect
  useEffect(() => {
    const session = supabase.auth.session();
    if (session == null || session.user == null) {
      dispatch(logout());
      router.replace("/signin");
    } else {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //component functions
  const getData = () => {
    let incoming = [];
    supabase
      .from<Profiles>("profiles")
      .select("fname, lname, email, interests")
      .eq("role_id", 1)
      .order("updated_at")
      .then((res) => {
        if (res.body) {
          res.body.forEach((profile) =>
            incoming.push(
              createData(
                profile.fname + " " + profile.lname,
                profile.email,
                profile.interests
              )
            )
          );
          console.log(incoming);
          setClients(incoming);
        }
      });
    console.log("Get supabase data");
  };

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  function createData(name: string, email: string, interests: string) {
    return { name, email, interests };
  }

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
          sx={{ px: { xs: 0, sm: 2, md: 3 } }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "40vw" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Client</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Interests</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients.map((client) => (
                  <TableRow
                    key={client.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {client.name}
                    </TableCell>
                    <TableCell align="right">{client.email}</TableCell>
                    <TableCell align="right">
                      {`${client.interests}  `}
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
          sx={{ px: { xs: 0, sm: 2, md: 1 } }}
        >
          <Card variant="outlined">
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
              mx={2}
              fontSize={matches ? ".9rem" : undefined}
            >
              {clients.length == 0
                ? "Currently, you have no clients."
                : `You have ${clients.length} clients`}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;

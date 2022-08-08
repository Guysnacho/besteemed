/**
 * @fileoverview Navigation bar of the website
 */
import {
  Box,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

/**
 * @function Navbar
 * @remarks Setting type for pages with a layout
 */
const Navbar = () => {
  const [page, setPage] = useState(0); //Track current page
  const router = useRouter(); // Router for switching pages in React

  //Updates on click and reroutes to the selected page
  const handleChange = (event: React.SyntheticEvent, newPage: number) => {
    event.preventDefault();
    setPage(newPage);
    if (newPage === 0) router.push("/");
    if (newPage === 1) router.push("/bookstore");
    if (newPage === 2) router.push("/esteemed");
    if (newPage === 3) router.push("/leadership");
    if (newPage === 4) router.push("/cpr");
  };

  //Updates nav if we change page via a different link
  useEffect(() => {
    if (router.pathname == "/") setPage(0);
    if (router.pathname == "/bookstore") setPage(1);
    if (router.pathname == "/blog") setPage(2);
    if (router.pathname == "/services") setPage(2);
  }, [router.pathname]);

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        sx={{
          position: matches ? "sticky" : undefined,
          top: matches ? 0 : undefined,
        }}
      >
        {matches ? (
          <Grid item xs={12} zIndex={1000}>
            <Paper sx={{ borderRadius: "0px" }}>
              <Typography variant="h5" p={2}>
                Bosede Adetunji
              </Typography>
            </Paper>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Tabs
              onChange={handleChange}
              indicatorColor="primary"
              variant="standard"
              value={page}
              sx={{ boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <Tab label="Home" />
              <Tab label="Bookstore" />
              <Tab label="Esteemed Woman" />
              <Tab label="Leadership" />
              <Tab label="CPR Classes" />
            </Tabs>
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default Navbar;

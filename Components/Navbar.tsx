/**
 * @fileoverview Navigation bar of the website
 */
import React, { useEffect, useState } from "react";
import { Grid, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

/**
 * @function Navbar
 * @remarks Setting type for pages with a layout
 */
const Navbar = () => {
  const [page, setPage] = useState(0); //Track current page
  const router = useRouter(); // Router for switching pages in React

  //Custom tabs with box shadow
  const TopTab = styled(Tabs)({
    boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.05)",
  });

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

  return (
    <>
      <Grid
        container
        direction="column"
        sx={{ width: "100" }}
      >
        <Grid item xs={12}>
          <TopTab
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            value={page}
            centered
          >
            <Tab label="Home" />
            <Tab label="Bookstore" />
            <Tab label="Esteemed Woman" />
            <Tab label="Leadership" />
            <Tab label="CPR Classes" />
          </TopTab>
        </Grid>
      </Grid>
    </>
  );
};
export default Navbar;

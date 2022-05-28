import React, { useEffect, useState } from "react";
import { Grid, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

const Navbar = () => {
  const [page, setPage] = useState(0); //Track current page
  const router = useRouter();

  //Custom tabs with box shadow
  const TopTab = styled(Tabs)({
    boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.05)",
  });

  //Updates on click and reroutes
  const handleChange = (event: React.SyntheticEvent, newPage: number) => {
    event.preventDefault();
    setPage(newPage);
    if (newPage === 0) router.push("/");
    if (newPage === 1) router.push("/bookstore");
    if (newPage === 2) router.push("/blog");
    if (newPage === 3) router.push("/services");
  };

  //Updates page number on initial page load
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
        sx={{ width: "100%", bgcolor: "background.paper" }}
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
            <Tab label="Blog" />
            <Tab label="Services" />
          </TopTab>
        </Grid>
      </Grid>
    </>
  );
};
export default Navbar;

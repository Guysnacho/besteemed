/**
 * @fileoverview Navigation bar of the website
 */
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
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

  const pages = ["Home", "Bookstore", "Esteemed Women", "Leadership", "CPR"];
  const links = ["/", "/bookstore", "/esteemed", "/leadership", "/cpr"];

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
    handleCloseNavMenu();
    if (router.pathname == "/") setPage(0);
    if (router.pathname == "/bookstore") setPage(1);
    if (router.pathname == "/blog") setPage(2);
    if (router.pathname == "/services") setPage(2);
  }, [router.pathname]);

  //Menu anchors for smaller screens
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
          <Grid item xs={12}>
            <AppBar position="static">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem
                          key={page}
                          onClick={() => {
                            router.push(links[pages.indexOf(page)]);
                          }}
                        >
                          <Typography textAlign="center" component="a">
                            {page}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  <Typography
                    variant="button"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: undefined, md: "flex" },
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      textDecoration: "none",
                    }}
                  >
                    Bosede Adetunji
                  </Typography>
                </Toolbar>
              </Container>
            </AppBar>
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

/**
 * @fileoverview Navigation bar of the website
 */
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactElement;
}

/**
 * @function Navbar
 * @remarks Setting type for pages with a layout
 */
const Navbar = () => {
  const [page, setPage] = useState(0); //Track current page
  const router = useRouter(); // Router for switching pages in React

  const pages = ["Home", "Bookstore", "Esteemed Women", "Leadership", "CPR"];
  const links = ["/", "/bookstore", "/esteemed", "/leadership", "/cpr"];

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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

  const HideOnScroll = (props: { children: React.ReactElement }) => {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <div>
      <Grid
        container
        sx={{
          position: matches ? "sticky" : undefined,
          top: matches ? 0 : undefined,
        }}
      >
        {matches ? (
          <Grid item xs={12}>
            <HideOnScroll>
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
                        <MenuIcon htmlColor="#fff" />
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
                    <Button
                      onClick={() => {
                        router.push("/");
                        handleCloseNavMenu();
                      }}
                      sx={{ my: 2, display: "block" }}
                    >
                      <Typography variant="h6" color="common.white">
                        Bosede Adetunji
                      </Typography>
                    </Button>
                  </Toolbar>
                </Container>
              </AppBar>
            </HideOnScroll>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <HideOnScroll>
              <AppBar position="static">
                <Container maxWidth="xl">
                  <Toolbar disableGutters>
                    <Button
                      onClick={() => {
                        router.push("/");
                        handleCloseNavMenu();
                      }}
                      sx={{ my: 2, display: "block" }}
                    >
                      <Typography variant="h6" color="common.white">
                        Bosede Adetunji
                      </Typography>
                    </Button>
                    <Box
                      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                    >
                      {pages.map((page) => (
                        <Button
                          key={page}
                          onClick={() => {
                            router.push(links[pages.indexOf(page)]);
                            handleCloseNavMenu();
                          }}
                          sx={{ my: 2, color: "white", display: "block" }}
                        >
                          {page}
                        </Button>
                      ))}
                    </Box>
                  </Toolbar>
                </Container>
              </AppBar>
            </HideOnScroll>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
export default Navbar;

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
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactElement;
}

/**
 * @function Navbar
 * @remarks Setting type for pages with a layout
 */
const Navbar = () => {
  const router = useRouter(); // Router for switching pages in React

  const pages = [
    "Home",
    "Bookstore",
    "The Esteemed Women",
    "Leadership",
    "CPR",
  ];
  const links = ["/", "/bookstore", "/esteemed", "/leadership", "/cpr"];

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //Updates nav if we change page via a different link
  useEffect(() => {
    handleCloseNavMenu();
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
                      The Esteemed Woman
                    </Typography>
                  </Button>
                </Toolbar>
              </Container>
            </AppBar>
          </Grid>
        ) : (
          <Grid item xs={12}>
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
                      The Esteemed Woman
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
          </Grid>
        )}
      </Grid>
    </div>
  );
};
export default Navbar;

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid, Link, Stack, Typography, useTheme } from "@mui/material";
import IconLink from "./Individual/IconLink";

const Footer = () => {
  const theme = useTheme();
  const contrastColor = theme.palette.getContrastText(
    theme.palette.primary.dark
  );
  return (
    <footer>
      <Grid
        container
        width="100%"
        justifyContent="center"
        mt={3}
        px={15}
        py={4}
        sx={{
          opacity: "70%",
          backgroundColor: theme.palette.primary.dark,
          color: contrastColor,
          boxShadow:
            "rgba(50, 50, 93, 0.1) 0px 3px 30px -12px inset, rgba(0, 0, 0, 0.3) 0px 9px 18px -9px inset",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography variant="body1" mr={1}>
            © 2021 Copyright:
          </Typography>
          <Link
            variant="body1"
            color="rgb(193, 237, 204, 1)"
            underline="none"
            href="https://www.bosedeadetunji.com"
            target="_blank"
            rel="noopener"
          >
            www.BosedeAdetunji.com
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" textAlign="center">
            Connect with us!
          </Typography>
          <Stack
            justifyContent="space-between"
            direction="row"
            spacing={0}
            mt={2}
          >
            <IconLink
              href="https://www.youtube.com/c/Pastor2LilyBosedeAdetunji"
              child={<YouTubeIcon />}
              color={contrastColor}
            />
            <IconLink
              href="https://www.instagram.com/besteemedwithbosede/"
              child={<InstagramIcon />}
              color={contrastColor}
            />
            <IconLink
              href="https://www.linkedin.com/in/bosede-adetunji-6347317a/"
              child={<LinkedInIcon />}
              color={contrastColor}
            />
            <IconLink
              href="https://www.facebook.com/BosedeOAdetunji/"
              child={<FacebookIcon />}
              color={contrastColor}
            />
            <IconLink
              href="tel:614-596-4626"
              child={<PhoneRoundedIcon />}
              color={contrastColor}
            />
          </Stack>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography>Made with</Typography>
          <Typography color="rgb(193, 237, 204, 1)" mx={0.4}>
            ❤
          </Typography>
          <Typography>by Tunji Productions</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

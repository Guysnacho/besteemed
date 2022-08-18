import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IconLink from "./Individual/IconLink";

const Footer = () => {
  const theme = useTheme();
  const contrastColor = theme.palette.getContrastText(
    theme.palette.primary.dark
  );
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      component="footer"
      justifyContent="center"
      mt={3}
      px={10}
      py={4}
      sx={{
        opacity: "70%",
        backgroundColor: theme.palette.primary.main,
        color: contrastColor,
        boxShadow:
          "rgba(50, 50, 93, 0.1) 0px 3px 30px -12px inset, rgba(0, 0, 0, 0.3) 0px 9px 18px -9px inset",
      }}
    >
      <Grid item xs={12} md={4} justifyContent={matches ? "center" : undefined}>
        <Typography my={2} display="flex" justifyContent="space-evenly">
          Made with ❤ by Tunji Productions
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
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
        md={4}
        xs={12}
        my={3}
        justifyContent={matches ? "center" : undefined}
      >
        <Typography variant="body1" textAlign="center">
          © 2021 Copyright
        </Typography>
        <Typography textAlign="center">
          <Link
            px="auto"
            variant="body1"
            color="rgb(193, 237, 204, 1)"
            href="https://www.bosedeadetunji.com"
            target="_blank"
            rel="noopener"
          >
            www.BosedeAdetunji.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

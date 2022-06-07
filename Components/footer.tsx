import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid, Link, Stack, Typography } from "@mui/material";
import IconLink from "./Individual/IconLink";

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        width="100%"
        justifyContent="center"
        my={3}
        px={15}
        sx={{ opacity: "70%" }}
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
            color="primary"
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
            />
            <IconLink
              href="https://www.instagram.com/besteemedwithbosede/"
              child={<InstagramIcon />}
            />
            <IconLink
              href="https://www.linkedin.com/in/bosede-adetunji-6347317a/"
              child={<LinkedInIcon />}
            />
            <IconLink href="tel:614-596-4626" child={<PhoneRoundedIcon />} />
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
          <Typography color="red" mx={0.4}>
            ❤
          </Typography>
          <Typography>by Tunji Productions</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

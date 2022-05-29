import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Grid container height="8%" width={"100%"} justifyContent="center" my={3}>
        <Typography textAlign="center" fontStyle={{ opacity: "50%" }}>
          Made with
        </Typography>
        <Typography color="red" fontStyle={{ opacity: "50%" }} mx={0.4}>
          ❤
        </Typography>
        <Typography fontStyle={{ opacity: "50%" }}>
          {" "}
          by Tunji Productions
        </Typography>
      </Grid>
    </footer>
  );
};

export default Footer;

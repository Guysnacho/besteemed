import ConstructionIcon from "@mui/icons-material/Construction";
import { Grid, Typography } from "@mui/material";

const UnderConstruction = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ display: "flex", alignItems: "center", my: 5 }}>
        <ConstructionIcon fontSize="large" sx={{ mx: "auto" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" textAlign="center" my={5}>
          Under Construction
        </Typography>
        <Typography variant="body1" textAlign="center" my={5}>
          Hi, unfortunately this part of the site is under construction but
          check back later, there should be something soon 😁 <br /> Information
          on CPR and leadership classes are on their way along with the work
          we're doing across the world to empower others like you!
        </Typography>
      </Grid>
    </Grid>
  );
};
export default UnderConstruction;

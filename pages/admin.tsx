import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";

/**
 * @fileoverview Admin page
 * @returns {NextPage} - A Nextjs Page
 */
const Admin: NextPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} my="30vh">
        <Typography variant="h3" my="auto" textAlign="center">
          Admin Page
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Admin;

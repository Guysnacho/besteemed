import {
  Alert,
  Button,
  Container,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const emailVal = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$");

const ForgotPass = () => {
  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    if (email) {
      supabase.auth.api.resetPasswordForEmail(email).then((res) => {
        setSuccessMessage("Check your email for a link :)");
        if (res.data) {
          setSuccessMessage("Check your email for a confirmation");
        } else if (res.error) {
          console.error("You got an error - " + res.error.message);
          setErrorMessage(res.error.message);
        } else {
          setErrorMessage(
            "Something went wrong along the way, try again later"
          );
        }
      });
    } else {
      setErrorMessage("You didn't fill everything in");
    }
    setEmail("");
    setLoading(false);
  };

  return (
    <Container
      component={Paper}
      sx={{
        width: matches ? "90vw" : "40vw",
        m: "auto",
        py: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {successMessage ? (
        <Typography variant="h5" m="auto">
          {successMessage}
        </Typography>
      ) : (
        <FormControl>
          <Stack spacing={4} direction="column" my="auto">
            {errorMessage == null ? (
              <Alert severity="error">
                {"Oops, something went wrong - " + errorMessage}
              </Alert>
            ) : (
              <></>
            )}
            <TextField
              id="outlined-username-input"
              variant="outlined"
              label="Username"
              type="email"
              error={!emailVal.test(email)}
              helperText={errorMessage}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              disabled={loading}
              required
            />
            <Button
              variant="outlined"
              aria-label="login"
              onClick={handleSubmit}
              disabled={!email}
            >
              Reset Password
            </Button>
          </Stack>
        </FormControl>
      )}
    </Container>
  );
};
export default ForgotPass;

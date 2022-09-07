import {
  Alert,
  Button,
  Container,
  FormControl,
  Paper,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

interface ApiError {
  data: {};
  error: {
    message: string;
    status: number;
    session: {};
    user: {};
  };
  session: {};
}

const Auth = () => {
  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (email && password) {
      setLoading(true);
      supabase.auth
        .signIn({ email, password })
        .then((user) => {
          console.info(user);
        })
        .catch((error) => {
          console.error("You got an error - " + error.error.message);
          setErrorMessage(error.error.message);
        });
    } else {
      setErrorMessage("You didn't fill everything in");
    }
    setEmail("");
    setPassword("");
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
      <FormControl>
        <Stack spacing={4} direction="column" my="auto">
          {errorMessage !== "" ? (
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={loading}
            required
          />
          <TextField
            id="outlined-password-input"
            variant="outlined"
            label="Password"
            type="password"
            auto-complete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            disabled={loading}
            required
          />
          <Button
            variant="outlined"
            aria-label="login"
            onClick={handleLogin}
            disabled={!(email && password)}
          >
            Sign In
          </Button>
        </Stack>
      </FormControl>
    </Container>
  );
};
export default Auth;

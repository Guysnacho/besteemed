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
import { UserCredentials } from "@supabase/supabase-js";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/userSlice";
import { supabase } from "../../utils/supabaseClient";

const emailVal = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$");

type ApiError = {
  data: {} | null;
  error: { message: string; status: number } | null;
  session: any | null;
  user: UserCredentials | null;
};

const Auth = (props: { signUp: boolean }) => {
  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // App state
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useAppDispatch(); // Sends actions to redux

  const handleLogin = () => {
    if (email && password) {
      setLoading(true);
      supabase.auth.signIn({ email, password }).then((res) => {
        if (res.user != null && res.session != null) {
          console.info(res.user.user_metadata);
          dispatch(login({ user: res.user, session: res.session }));
        } else if (res.error) {
          console.error("You got an error - " + res.error.message);
          setErrorMessage(res.error.message);
        }
      });
    } else {
      setErrorMessage("You didn't fill everything in");
    }
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  const handleSignUp = () => {
    setLoading(true);
    if (email && password) {
      supabase.auth.signUp({ email, password }).then((res) => {
        if (res.user) {
          console.info(res.user);
          setSuccessMessage("Check your email for a confirmation");
        } else if (res.error) {
          console.error("You got an error - " + res.error.message);
          setErrorMessage(res.error.message);
        }
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
          {successMessage !== "" ? (
            <Alert severity="success">
              {"Please check your email for a confirmation"}
            </Alert>
          ) : (
            <>
              <TextField
                id="outlined-username-input"
                variant="outlined"
                label="Username"
                type="email"
                error={!emailVal.test(email)}
                autoComplete="current-email"
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
                error={password.length < 6}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                disabled={loading}
                required
              />
            </>
          )}
          <Button
            variant="outlined"
            aria-label="login"
            onClick={props.signUp ? handleSignUp : handleLogin}
            disabled={!(email && password)}
          >
            {props.signUp ? "Sign Up" : "Sign In"}
          </Button>
        </Stack>
      </FormControl>
    </Container>
  );
};
export default Auth;

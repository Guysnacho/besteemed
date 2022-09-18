import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { useState } from "react";
import banner from "../../assets/banners/leadership.png";
import { supabase } from "../../utils/supabaseClient";

const emailVal = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$");

const InterestForm = (props: {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}) => {
  // App state
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Component function
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
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          {successMessage !== "" ? (
            <Alert severity="success">
              {"Please check your email for a confirmation"}
            </Alert>
          ) : (
            <Card
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "65vw", sm: "50vw", md: "40vw" },
                borderRadius: "25px 0px 25px 0px",
              }}
              elevation={15}
            >
              <CardMedia>
                <Image src={banner} alt="Stylish banner" />
              </CardMedia>
              <CardContent
                sx={{
                  textAlign: "center",
                  py: { xs: 2, md: 1 },
                  px: { xs: 4, md: 1 },
                }}
              >
                <Typography variant="h6">Keep in Touch</Typography>
                <FormControl sx={{ mt: 2 }}>
                  <Stack spacing={4} direction="column" my="auto">
                    <TextField
                      id="outlined-first-name-input"
                      variant="outlined"
                      label="First Name"
                      type="text"
                      aria-label="first name"
                      placeholder="Ngozi"
                      defaultValue="Ngozi"
                      error={errorMessage !== ""}
                      autoComplete="first-name"
                      value={fname}
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                      disabled={loading}
                      required
                    />
                    <TextField
                      id="outlined-family-name-input"
                      variant="outlined"
                      label="Last Name"
                      type="text"
                      aria-label="family name"
                      placeholder="Okonjo-Iweala"
                      defaultValue="Okonjo-Iweala"
                      error={errorMessage !== ""}
                      autoComplete="family-name"
                      value={lname}
                      onChange={(e) => {
                        setLname(e.target.value);
                      }}
                      disabled={loading}
                      required
                    />
                    <TextField
                      id="outlined-username-input"
                      variant="outlined"
                      label="Email"
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
                      sx={{ mb: 2 }}
                      disabled={!(fname && lname && emailVal.test(email))}
                    >
                      Join the Community 🤗
                    </Button>
                  </Stack>
                </FormControl>
              </CardContent>
            </Card>
          )}
        </Fade>
      </Modal>
    </div>
  );
};
export default InterestForm;

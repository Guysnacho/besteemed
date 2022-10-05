import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { bannerUrls } from "../../utils/constants";
import { supabase } from "../../utils/supabaseClient";

const emailVal = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$");

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const interestList = [
  "Book Releases",
  "Esteemed Woman",
  "Excursions",
  "Speaker Events",
  "Leadership Training",
  "CPR",
];

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
  const [selection, setSelection] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  // Component functions
  const handleSignUp = () => {
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    supabase
      .from("profiles")
      .upsert(
        {
          fname: fname,
          lname: lname,
          interests: selection
            ? [...selection].sort((a, b) => a.localeCompare(b))
            : undefined,
          email: email,
        },
        { onConflict: "email", returning: "minimal", ignoreDuplicates: false }
      )
      .then((res) => {
        if (res.error) {
          setErrorMessage("Something went wrong - " + res.error.message);
        } else {
          setSuccessMessage(
            "Thank you for your interest! We'd love to keep in touch"
          );
        }
      });

    setEmail("");
    setFname("");
    setLname("");
    setSelection([]);
    setLoading(false);
  };

  const handleChange = (event: SelectChangeEvent<typeof selection>) => {
    const {
      target: { value },
    } = event;
    setSelection(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //Set default fill based on route
  useEffect(() => {
    if (router.asPath == "/bookstore") setSelection(["Book Releases"]);
    if (router.asPath == "/esteemed") setSelection(["Esteemed Woman"]);
    if (router.asPath == "/excursions") setSelection(["Excursions"]);
    if (router.asPath == "/cpr") setSelection(["CPR"]);
  }, [router.asPath]);

  function getStyles(
    interest: string,
    selection: readonly string[],
    theme: Theme
  ) {
    return {
      fontWeight:
        selection.indexOf(interest) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

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
          <Card
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "75vw", sm: "50vw", md: "40vw" },
              height: { xs: "75vh", sm: "80vh", md: "80vh" },
              borderRadius: "25px 0px 25px 0px",
            }}
            elevation={15}
          >
            <CardMedia>
              <Image
                src={bannerUrls.LEADERSHIP_1}
                alt="Stylish banner"
                width={matchesSm ? "350rem" : matchesMd ? "420rem" : "615rem"}
                height="75vh"
              />
            </CardMedia>
            <CardContent
              sx={{
                textAlign: "center",
                width: { xs: "75vw", sm: "50vw", md: "40vw" },
                maxHeight: { xs: "60vh", sm: "75vh", md: "80vh" },
                overflowY: "auto",
              }}
            >
              {errorMessage !== "" ? (
                <Alert severity="error" sx={{ m: "auto" }}>
                  {"Oops, something went wrong - " + errorMessage}
                </Alert>
              ) : (
                <></>
              )}
              {successMessage !== "" ? (
                <Alert severity="success" sx={{ m: "auto" }}>
                  {successMessage}
                </Alert>
              ) : (
                <Box sx={{ mb: { xs: 4, sm: 16, md: 23, lg: 30, xl: 35 } }}>
                  <Typography variant="h6">Keep in Touch</Typography>
                  <FormControl sx={{ mt: 2 }}>
                    <Stack spacing={4} direction="column">
                      <TextField
                        id="outlined-first-name-input"
                        variant="outlined"
                        label="First Name"
                        type="text"
                        aria-label="first name"
                        placeholder="Ngozi"
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
                        placeholder="esteemed@woman.com"
                        error={!emailVal.test(email)}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        disabled={loading}
                        required
                      />
                      <div>
                        <FormControl sx={{ width: "100%" }}>
                          <InputLabel id="demo-multiple-chip-label">
                            Interests
                          </InputLabel>
                          <Select
                            labelId="multiple-chip-label"
                            id="multiple-chip"
                            multiple
                            value={selection}
                            onChange={handleChange}
                            input={
                              <OutlinedInput
                                id="select-multiple-chip"
                                label="Interest"
                              />
                            }
                            renderValue={(selected) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 0.5,
                                }}
                              >
                                {selected.map((value) => (
                                  <Chip key={value} label={value} />
                                ))}
                              </Box>
                            )}
                            MenuProps={MenuProps}
                          >
                            {interestList.map((currentInterest) => (
                              <MenuItem
                                key={currentInterest}
                                value={currentInterest}
                                style={getStyles(
                                  currentInterest,
                                  selection,
                                  theme
                                )}
                              >
                                {currentInterest}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                      <Button
                        variant="outlined"
                        aria-label="login"
                        onClick={handleSignUp}
                        disabled={
                          !(fname && lname && emailVal.test(email)) || loading
                        }
                      >
                        Join the Community 🤗
                      </Button>
                    </Stack>
                  </FormControl>
                </Box>
              )}
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
};
export default InterestForm;

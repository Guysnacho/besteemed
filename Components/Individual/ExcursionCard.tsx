import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { url } from "inspector";

//Consistent typing for properties
type CardProps = {
  bgimg: string;
  width: number;
  height: number;
  ratio?: number;
  buttonText: string;
  link: string;
};

const ExcursionCard = (props: CardProps) => {
  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width="100%"
      sx={{
        background: `url(${props.bgimg})`,
        backgroundSize: matches
          ? props.width * 0.4 + "px " + props.height * 0.4 + "px"
          : props.width * (props.ratio || 0.75) +
            "px " +
            props.height * (props.ratio || 0.75) +
            "px",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        height: matches ? "10rem" : "18.7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        size="large"
        color="success"
        aria-label="Cruise excursion"
        href=""
        onClick={() => alert("You wanna go on a lil boat I seee")}
      >
        {props.buttonText}
      </Button>
    </Box>
  );
};
export default ExcursionCard;

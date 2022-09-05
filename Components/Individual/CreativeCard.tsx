import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

//Consistent typing for properties
export type CarouselCard = {
  src: StaticImageData;
  heading: string;
  body: string;
  link: string;
  className: string;
};

/**
 * @fileoverview Reusable card component for the carousel
 * @param props
 * @returns {React.ReactNode} A Card with a picture, text, and a link
 *
 */
const CreativeCard = (props: CarouselCard) => {
  //App state
  const [hover, setHover] = useState(false);

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      key={props.heading}
      className={props.className}
      variant="outlined"
      sx={{ width: matches ? "65vw" : "40vw", mx: "auto", pb: 2 }}
    >
      <CardMedia sx={{ width: "100%" }}>
        <Box
          sx={{
            background: `url(${props.src.src})`,
            backgroundSize: matches
              ? 254 * 1.4 + "px " + 97 * 1.4 + "px"
              : 254 * 2 + "px " + 97 * 2 + "px",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            height: matches ? "8rem" : "10rem",
          }}
        />
      </CardMedia>
      <CardContent sx={{ pb: 0 }}>
        <Typography textAlign="center" variant="h5" pt={1}>
          {props.heading}
        </Typography>
        <Typography
          variant="body2"
          p={1}
          fontSize={matches ? ".9rem" : undefined}
        >
          {props.body}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 3, mb: 1 }}>
        <Button
          variant="outlined"
          fullWidth
          aria-label="card-link"
          href={props.link}
        >
          Learn More!
        </Button>
      </CardActions>
    </Card>
  );
};
export default CreativeCard;

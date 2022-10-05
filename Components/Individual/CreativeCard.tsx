import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

//Consistent typing for properties
export type CarouselCard = {
  src: string;
  heading: string;
  body: string;
  link: string;
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
      sx={{
        width: { xs: "60vw", sm: "45vw", md: "45vw", lg: "40vw" },
        mx: "auto",
        pb: 1,
        mb: 5,
      }}
      elevation={hover ? 7 : 1}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardMedia>
        <Box
          sx={{
            background: `url(${props.src})`,
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
        <Typography textAlign="center" variant={matches ? "h6" : "h5"} pt={1}>
          {props.heading}
        </Typography>
        <Typography
          variant="body2"
          py={1}
          fontSize={matches ? ".9rem" : undefined}
          sx={{
            maxHeight: { xs: "30vh", sm: "75vh", md: "80vh" },
            overflowY: "auto",
          }}
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

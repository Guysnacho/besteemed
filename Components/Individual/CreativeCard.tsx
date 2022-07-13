import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

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
  return (
    <Card
      key={props.heading}
      className={props.className}
      variant="outlined"
      sx={{ maxWidth: "400px" }}
    >
      <CardMedia sx={{ width: "100%" }}>
        <Image
          alt={props.heading}
          src={props.src}
          placeholder="blur"
          blurDataURL={props.src.blurDataURL}
          layout="responsive"
        />
      </CardMedia>
      <CardContent sx={{ pb: 0 }}>
        <Typography textAlign="center" variant="h5" pt={1}>
          {props.heading}
        </Typography>
        <Typography variant="body2" p={1}>
          {props.body}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 3 }}>
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

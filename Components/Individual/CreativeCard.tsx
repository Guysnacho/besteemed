import { LinkOutlined } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
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
      sx={{ maxWidth: 300, minWidth: 300, height: "100%", mx: 4 }}
    >
      <CardMedia sx={{ width: "100%", height: "auto" }}>
        <Image
          alt={props.heading}
          src={props.src}
          placeholder="blur"
          blurDataURL={props.src.blurDataURL}
          layout="responsive"
        />
      </CardMedia>
      <CardContent sx={{ pb: 0, mb: -4 }}>
        <Typography textAlign="center" variant="subtitle1" pt={1}>
          {props.heading}
        </Typography>
        <Typography variant="body2" p={1}>
          {props.body}{" "}
        </Typography>
      </CardContent>
      <CardActions sx={{ pb: 1, pt: 0, flexFlow: "row-reverse" }}>
        <IconButton aria-label="card-link" href={props.link}>
          <LinkOutlined sx={{ fontSize: 25 }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default CreativeCard;

import { LinkOutlined } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography
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
      sx={{maxWidth: "400px"}}
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
      <CardActions sx={{ pb: 1, pt: 0, pr: 10, flexFlow: "row-reverse" }}>
        <IconButton aria-label="card-link" href={props.link}>
          <LinkOutlined sx={{ fontSize: 25 }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default CreativeCard;

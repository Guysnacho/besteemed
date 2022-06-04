import { LinkOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import background from "../../assets/background.webp";
import banner from "../../assets/banner-long.webp";
import banner2 from "../../assets/banner2.webp";
import banner4 from "../../assets/banner4.webp";
import banner5 from "../../assets/banner5.webp";
import React from "react";

//Consistent typing for properties
export type CarouselProps = {
  src: StaticImageData;
  heading: string;
  body: string;
  link: string;
};

/*shouldComponentUpdate(nextProps, nextState) {
  return false;
}*/

//Data for populating carousel
const carouselData = [
  {
    src: banner,
    heading: "Author",
    body: "Bosede is a published author and continues to write for the growth of others but also for herself. Her subjects range from spirituality and memoirs to self-help and empowerment. You can gleam some of her work in the bookstore here",
    link: "/bookstore",
  },
  {
    src: banner4,
    heading: "Trailblazer",
    body: "This esteemed woman leads by example. This means marching with those she wants to protect and proving that anytihng is possible with enough passion and dedication!",
    link: "/esteemed",
  },
  {
    src: background,
    heading: "Motivational Speaker",
    body: "Through talks in person and online in the US and to Esteemed Woman groups across the globe, Bosede lifts people up and motivates them to chase their ideas and goals. Check out her outlets here!",
    link: "/esteemed",
  },
  {
    src: banner5,
    heading: "Leadership Coach",
    body: "She was coached and certified under the leadership of John C. Maxwell. Bosede equips individuals and organizations with practical tools to break barriers, maximize their strengths, and amplify their success throughout all walks of life.",
    link: "leadership",
  },
  {
    src: banner2,
    heading: "Licensed CPR Instructor",
    body: "Bosede is also a licensed CPR instructor, offering classes to groups and individuals looking for a certification. Whether its required for work or if you just want the skill, schedule a class today!",
    link: "/cpr",
  },
];

const CreativeCarousel = () => {
  return carouselData.map((item) => (
    <Card
      key={item.heading}
      sx={{ maxWidth: 300, minWidth: 300, height: "100%", mx: 4 }}
    >
      <CardMedia sx={{ width: "100%", height: "auto" }}>
        <Image
          alt={item.heading}
          src={item.src}
          layout="responsive"
        />
      </CardMedia>
      <CardContent sx={{ pb: 0, mb: -4 }}>
        <Typography textAlign="center" variant="subtitle1" pt={1}>
          {item.heading}
        </Typography>
        <Typography variant="body2" p={1}>
          {item.body}{" "}
        </Typography>
      </CardContent>
      <CardActions sx={{ pb: 1, pt: 0, flexFlow: "row-reverse" }}>
        <IconButton aria-label="card-link" href={item.link}>
          <LinkOutlined sx={{ fontSize: 25 }} />
        </IconButton>
      </CardActions>
    </Card>
  ));
};
export default CreativeCarousel;

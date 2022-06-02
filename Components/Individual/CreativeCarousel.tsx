import { Card, CardMedia, Typography } from "@mui/material";

//Consistent typing for properties
export type CarouselProps = {
  src: string;
  heading: string;
  body: string;
};

const CreativeCarousel = (props: CarouselProps) => {
  return (
    <Card sx={{ maxWidth: 300, minWidth: 300, height: "100%" }}>
      <CardMedia component="img" height="75" image={props.src} />
      <Typography textAlign="center" variant="subtitle1" pt={1}>
        {props.heading}
      </Typography>
      <Typography variant="body2" p={1} pb={2}>
        {props.body}{" "}
      </Typography>
    </Card>
  );
};
export default CreativeCarousel;

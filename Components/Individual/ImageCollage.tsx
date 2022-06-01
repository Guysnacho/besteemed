import { ImageList, ImageListItem } from "@mui/material";
import banner1 from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner6 from "../../assets/banner6.png";

const imageData = [
  {
    img: banner6.src,
    title: "Bosede preaching",
    rows: 2,
    cols: 2,
  },
  {
    img: banner1.src,
    title: "Bosede's books",
    rows: 2,
  },
  {
    img: banner2.src,
    title: "Bosede on the radio",
  },
  {
    img: banner3.src,
    title: "Bosede at at a Susan G. Komen walk",
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageCollage = () => {
  return (
    <ImageList
      variant="quilted"
      sx={{ width: "100%", height: "100%", m: 0, overflow: "hidden" }}
      cols={4}
      rowHeight={143}
    >
      {imageData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageCollage;

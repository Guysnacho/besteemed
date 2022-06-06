import { ImageList, ImageListItem } from "@mui/material";
import banner1 from "../../assets/banner-long.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";
import banner6 from "../../assets/banner6.webp";
import React from "react";
import Image from "next/image";

const imageData = [
  {
    img: banner6,
    title: "Bosede preaching",
    rows: 2,
    cols: 2,
  },
  {
    img: banner1,
    title: "Bosede's books",
    rows: 2,
  },
  {
    img: banner2,
    title: "Bosede on the radio",
  },
  {
    img: banner3,
    title: "Bosede at at a Susan G. Komen walk",
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    width: `${size * cols}`,
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
          key={item.img.src}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <Image
            {...srcset(item.img.src, 121, item.rows, item.cols)}
            alt={item.title}
            layout="fill"
            placeholder="blur"
            objectFit="cover"
            blurDataURL={item.img.blurDataURL}
            priority
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageCollage;

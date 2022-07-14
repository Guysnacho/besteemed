import { ImageList, ImageListItem } from "@mui/material";
import banner1 from "../../assets/banners/banner-long.jpg";
import banner2 from "../../assets/banners/banner2.jpg";
import banner3 from "../../assets/banners/banner3.jpg";
import banner6 from "../../assets/banners/banner6.jpg";
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

/**
 *
 * @param image
 * @param size
 * @param rows
 * @param cols
 * @returns atributes for sizing the images
 */
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    //width: `${size * cols}`,
  };
}

/**
 * @fileoverview Image collage with different aspects of Bosede
 * @returns 
 */
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
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageCollage;

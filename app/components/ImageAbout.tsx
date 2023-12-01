"use client";
import React, { useState } from "react";
import ProductSkeleton from "./ProductSkeleton";
import { about_us } from "../data/ProductsDataSk";
import Image from "next/image";

const ImageAbout = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <>
      {!imageLoaded && <ProductSkeleton />}
      <Image
        src={about_us[0].title_image}
        alt="About us"
        width={1000}
        height={1000}
        className="product_image_main"
        onLoad={handleImageLoad}
        priority={true}
      />
    </>
  );
};

export default ImageAbout;

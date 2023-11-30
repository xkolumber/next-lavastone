"use client";
import React, { useState } from "react";
import ProductSkeleton from "./ProductSkeleton";
import { about_us } from "../data/ProductsDataSk";

const ImageAbout = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <>
      {!imageLoaded && <ProductSkeleton />}
      <img
        src={about_us[0].title_image}
        alt="About us"
        className="product_image_main"
        onLoad={handleImageLoad}
      />
    </>
  );
};

export default ImageAbout;

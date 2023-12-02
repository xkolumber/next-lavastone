"use client";
import { useState } from "react";
import CardToggleArrow from "./CardToggleArrow";
import { introduction_products } from "../data/ProductsDataSk";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";

interface Props {
  id: string;
  title: string;
  link: string;
  img_src: string;
}
const Card = ({ id, title, img_src }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const product = introduction_products.find(
    (item) => item.id.toString() === id
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      className={`card `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-between">
        {isMobile ? (
          <h1>0{id}</h1>
        ) : (
          <h1 style={{ color: isHovered ? "white" : "#171717" }}>0{id}</h1>
        )}
        {isMobile ? (
          <Link href={`/product/${id}`}>
            <CardToggleArrow />
          </Link>
        ) : (
          <Link href={`/product/${id}`}>
            <CardToggleArrow isHovered={isHovered} />
          </Link>
        )}
      </div>
      <div className="card_description">
        <h2>{title}</h2>
        <ul>
          {product.elements.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      </div>
      <Link href={`/product/${id}`}>
        <img src={img_src} alt={title} />
      </Link>
    </div>
  );
};

export default Card;

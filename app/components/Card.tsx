"use client";
import { useState } from "react";
import CardToggleArrow from "./CardToggleArrow";
import { introduction_products } from "../data/ProductsDataSk";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  link: string;
  img_src: string;
}

const Card = ({ id, title, img_src }: Props) => {
  // const [isHovered, setIsHovered] = useState(false);

  // const isMobile = () => {
  //   return window.innerWidth <= 768;
  // };

  // const product = introduction_products.find(
  //   (item) => item.id.toString() === id
  // );

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  // return (
  //   <div
  //     className={`card ${isMobile() ? "mobile" : ""}`}
  //     onMouseEnter={() => !isMobile() && setIsHovered(true)}
  //     onMouseLeave={() => !isMobile() && setIsHovered(false)}
  //   >
  //     {isHovered && (
  //       <Link href={`/product/${id}`}>
  //         <Image
  //           src={img_src}
  //           alt={title}
  //           fill
  //           className="product_image_main"
  //           priority={true}
  //         />
  //       </Link>
  //     )}
  //     <div className="space-between">
  //       <h1 style={{ color: isHovered ? "white" : "#171717" }}>0{id}</h1>
  //       <Link href={`/product/${id}`}>
  //         <CardToggleArrow isHovered={isHovered} />
  //       </Link>
  //     </div>
  //     <div className="card_description">
  //       <h2>{title}</h2>
  //       <ul>
  //         {product.elements.map((element) => (
  //           <li key={element}>{element}</li>
  //         ))}
  //       </ul>
  //     </div>
  //     {isMobile() && (
  //       <Link href={`/product/${id}`}>
  //         <Image
  //           src={img_src}
  //           alt={title}
  //           width={1000}
  //           height={1000}
  //           className="product_image_main"
  //         />
  //       </Link>
  //     )}
  //   </div>
  <></>;
};

export default Card;

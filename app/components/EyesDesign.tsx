"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { basic } from "../data/ProductsDataSk";
import Image from "next/image";
interface Props {
  productId?: string;
}

const EyesDesign = ({ productId }: Props) => {
  const [primaryColor, setPrimaryColor] = useState("");
  const [customBordertop, setCustomBordertop] = useState("");

  useEffect(() => {
    if (productId === "3") {
      setPrimaryColor("text_ccc");
      setCustomBordertop("custom_border_primary");
    } else {
      setPrimaryColor("");
      setCustomBordertop("custom_border_fourthiary");
    }
  }, [productId]);

  return (
    <div className={`template2 center ${customBordertop} mobile_padding `}>
      <Image
        src="https://storage.googleapis.com/lavastone/uvod/magnum_right.png"
        alt="Magma"
        className="magnum_product_page"
        width={1000}
        height={1000}
      />

      <div className="inside ">
        <h2 className={`mb2 max1200 ${primaryColor}`}>{basic[0].eye_design}</h2>
        <p className={primaryColor}>{basic[0].eye_design_description}</p>
        <div className="margin_bottom_5"></div>

        <div className="inline_flex">
          <Link href="/contact">
            <Button productId={productId}>{basic[0].button_kontakt}</Button>
          </Link>
          {productId === "1" && (
            <Link
              href="https://storage.googleapis.com/lavastone/pdf/pietracolata_small.pdf"
              className="btn btn--outline text_dark"
              target="_blank"
              download
            >
              {basic[0].button_stiahnut}
            </Link>
          )}
          {productId === "2" && (
            <Link
              href="https://storage.googleapis.com/lavastone/pdf/fucina_small.pdf"
              className="btn btn--outline text_dark"
              target="_blank"
              download
            >
              {basic[0].button_stiahnut}
            </Link>
          )}
          {productId === "3" && (
            <Link
              href="https://storage.googleapis.com/lavastone/pdf/sansone_all.zip"
              className="btn btn--outline text_ccc"
              target="_blank"
              download
            >
              {basic[0].button_stiahnut}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EyesDesign;

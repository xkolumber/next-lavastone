"use client";

import Link from "next/link";
import { basic } from "../data/ProductsDataSk";
import Button from "./Button";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  productId?: string;
}

const UniqueElement = ({ productId }: Props) => {
  const [primaryColor, setPrimaryColor] = useState("");

  useEffect(() => {
    // Set custom class name based on productId
    if (productId === "3") {
      setPrimaryColor("text_ccc");
    } else {
      setPrimaryColor("");
    }
  }, [productId]);
  const location = usePathname();

  const isHomepage = location === "/";
  return (
    <>
      <div
        className={`template2 ${
          isHomepage
            ? "no_border_top"
            : productId === "3"
            ? "custom_border_primary_top"
            : "custom_border_primary_top_tertiary"
        }`}
      >
        <Image
          src="https://storage.googleapis.com/lavastone/uvod/magnum_down.png"
          alt="Magma"
          className="magnum_down"
          width={1000}
          height={1000}
        />

        <div className="inside margin_top_3">
          <h1 className={`max1200 ${primaryColor} unique`}>
            {basic[0].unique_element}
          </h1>
          <p className={primaryColor}>{basic[0].unique_element_text}</p>
          <Link href="/contact">
            <Button productId={productId}>{basic[0].button_zaujem}</Button>
            <div className="margin_bottom_5"></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UniqueElement;

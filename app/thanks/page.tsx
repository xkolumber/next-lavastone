import React from "react";
import { basic } from "../data/ProductsDataSk";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="template2 product_silver">
      <div className="fixed_height" />
      <Image
        src="https://storage.googleapis.com/lavastone/uvod/magnum_down.png"
        alt="Magma"
        className="magnum_down"
        width={1000}
        height={1000}
        priority={true}
      />

      <div className="inside">
        <h1 className="max800">{basic[0].thank_title}</h1>
        <p>{basic[0].thank_description}</p>
        <Link href="/">
          <button className="btn btn--primary">{basic[0].button_spat}</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;

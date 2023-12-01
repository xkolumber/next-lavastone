import React from "react";
import { privacy } from "../data/ProductsDataSk";
import Link from "next/link";

const Page = () => {
  return (
    <div className="template">
      <div className="fixed_height" />
      <div className="inside">
        <div className="policy">
          <h2>{privacy[0].who_we_are}</h2>
          <p>
            {privacy[0].adress}
            <Link href="/"> https://www.lavastone.{privacy[0].sk_cz}</Link>
          </p>
          <br></br>
          <h2>{privacy[0].commitment}</h2>
          <p>{privacy[0].commitment_text}</p>
          <br></br>
          <h2>{privacy[0].types_data}</h2>
          <p>{privacy[0].types_data_text}</p>
          <br></br>
          <h2>{privacy[0].cookies}</h2>
          <p>{privacy[0].cookies_text}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from "react";
import IntroductionNext from "./components/IntroductionNext";
import CardCollection from "./components/CardCollection";
import UniqueElement from "./components/UniqueElement";

const page = () => {
  return (
    <main>
      <IntroductionNext />

      <CardCollection />
      <div className="product_silver">
        <UniqueElement />
      </div>
    </main>
  );
};

export default page;

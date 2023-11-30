import React from "react";
import UniqueElement from "../components/UniqueElement";
import { about_us, basic } from "../data/ProductsDataSk";
import ToggleText from "../components/ToggleText";
import ProductSkeleton from "../components/ProductSkeleton";
import Link from "next/link";
import ImageAbout from "../components/ImageAbout";

const page = () => {
  if (!about_us) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product_introduction">
      <div className="fixed_height" />
      <div className="inside">
        <div>
          <h1> {about_us[0].title}</h1>
          <p>{about_us[0].title_description}</p>
          <Link href="/contact">
            <button className="btn btn--primary">
              {basic[0].button_zaujem}
            </button>
          </Link>
        </div>
      </div>
      <ImageAbout />
      <div className="template cut_top">
        <img
          src="https://storage.googleapis.com/lavastone/uvod/magnum_right.png"
          alt="Magma"
          className="magnum_right"
        />
        <div className="inside">
          <h1>{about_us[0].our_story_title}</h1>
          <p>{about_us[0].concept}</p>
          <Link href="/contact">
            <button className="btn btn--primary">
              {basic[0].button_zaujem}
            </button>
          </Link>
        </div>
      </div>
      <div className="inside">
        <h1 className="max45vw">{about_us[0].second_title}</h1>
        <div className="product_description">
          <p className="w50">{about_us[0].second_title_description}</p>

          <div className="toggle_list">
            {about_us[0].toggles.map((toggle, id) => (
              <ToggleText
                key={id}
                title={toggle.title}
                text={toggle.description}
                img_src={toggle.img_src}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="inside">
        <h2 className="max50vw">{about_us[0].design_title}</h2>
        <div className="product_images">
          {about_us[0].images.map((image_src, index) => (
            <div className="image-container" key={index}>
              <img
                src={image_src}
                alt="Product PietraColata"
                className="image"
              />
            </div>
          ))}
        </div>
      </div>
      <UniqueElement />
    </div>
  );
};

export default page;

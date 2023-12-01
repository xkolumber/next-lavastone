import React from "react";
import { basic, services } from "../data/ProductsDataSk";
import Link from "next/link";
import ToggleText from "../components/ToggleText";
import UniqueElement from "../components/UniqueElement";

const Page = () => {
  return (
    <>
      <div className="template">
        <div className="fixed_height" />
        <div className="inside">
          <div>
            <h1>{services[0].title}</h1>
            <p>{services[0].title_description}</p>
            <Link href="/contact">
              <button className="btn btn--primary">
                {basic[0].button_zaujem}
              </button>
            </Link>
          </div>
          <div className="toggle_services">
            {services[0].toggles.map((toggle, id) => (
              <ToggleText
                key={id}
                title={toggle!.title}
                text={toggle!.description}
                isService={true}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="product_silver">
        <UniqueElement />
      </div>
    </>
  );
};

export default Page;

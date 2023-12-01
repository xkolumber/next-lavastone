"use client";
import BackgroundVideo from "./BackgroundVideo";

import { basic } from "../data/ProductsDataSk";
import NavbarHomePage from "./NavbarHomePage";
import NavbarHomePage2 from "./NavbarHomePage2";
import Link from "next/link";
import Image from "next/image";

const IntroductionNext = () => {
  const handleArrowClick = () => {
    window.scrollTo({
      top: window.scrollY + 550,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="introduction">
        <BackgroundVideo
          videoSource="https://storage.googleapis.com/lavastone/uvod/uvod_video.mp4"
          placeholderImage="/uvod_foto.jpg"
        />
        <NavbarHomePage />
        <div className="introduction_logo_arrow">
          <Image
            src="/biele_logo.svg"
            alt="Biele logo"
            className="logo"
            width={50}
            height={50}
            priority={true}
          />
          <Image
            src="/uvod_sipka.svg"
            alt="Sipka nadol"
            className="arrow_down"
            onClick={handleArrowClick}
            width={700}
            height={500}
            priority={true}
          />
        </div>
      </div>
      <div className="template">
        <NavbarHomePage2 />
        <Image
          src="https://storage.googleapis.com/lavastone/uvod/magnum_right.png"
          alt="Magma"
          className="magnum_right"
          width={1000}
          height={1000}
        />

        <div className="inside">
          <h1 className="max800">{basic[0].introduction_title}</h1>
          <p>{basic[0].introduction_text1}</p>
          <br></br>
          <p>{basic[0].introduction_text2}</p>
          <Link href="/contact">
            <button className="btn btn--primary margin_bottom_5">
              {basic[0].button_zaujem}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IntroductionNext;

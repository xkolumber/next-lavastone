"use client";

import { useEffect, useState } from "react";

import useCounterStore from "../counter/store";
import Badge from "./Badge";
import NavbarHamburger from "./NavbarHamburger";
import NavbarHeart from "./NavbarHeart";
import NavbarLogo from "./NavbarLogo";
import NavbarSet from "./NavbarSet";
import Link from "next/link";
import { basic } from "../data/ProductsDataSk";
import { useParams, usePathname } from "next/navigation";
import { Elsie_Swash_Caps } from "next/font/google";

const Navbar = () => {
  const router = usePathname();
  const isHomePage = router === "/";

  if (isHomePage) {
    return null; // Don't render Navbar on the homepage
  }
  const [isExpanded, setIsExpanded] = useState(false);
  const [customClassName, setCustomClassName] = useState("product_silver");
  const [whiteColor, setWhiteColor] = useState("");
  const [customBorder, setCustomBorder] = useState("");
  const { counter } = useCounterStore();
  const [productId, setProductId] = useState("");

  const pathname = usePathname();
  useEffect(() => {
    let productId: any;

    if (pathname.includes("product")) {
      productId = pathname.split("/").pop();
      if (productId) {
        setProductId(productId);
      }
    } else {
      setProductId("");
    }

    console.log(pathname, productId);
  }, [pathname]);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleNavbarCancel = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (productId) {
      if (productId === "1") {
        setCustomClassName("product_silver");
        setWhiteColor("");
        setCustomBorder("");
      } else if (productId === "2") {
        setCustomBorder("");
        setWhiteColor("product_white");
        setCustomClassName("product_white");
      } else {
        setCustomBorder("custom_border_primary");
        setWhiteColor("");
        setCustomClassName("product_black");
      }
    } else {
      if (pathname.includes("/favourite")) {
        setCustomBorder("");
        setWhiteColor("product_white");
        setCustomClassName("product_white");
      } else {
        setCustomBorder("");
        setWhiteColor("product_silver");
        setCustomClassName("product_silver");
      }
    }
  }, [productId, pathname]);

  return (
    <div className={`navbar ${customClassName} ${customBorder} `}>
      <Link href="/">
        {productId === "3" ? <NavbarLogo productId="3" /> : <NavbarLogo />}
      </Link>
      <div className="navbar_second_group">
        {productId === "3" ? (
          <div className="languages ">
            <p className="text_ccc font_weight600"> SK</p>
            <Link href="https://www.lavastone.cz">
              <p className="text_ccc">CZ</p>
            </Link>
          </div>
        ) : (
          <div className="languages">
            <p className="font_weight600">SK</p>
            <Link href="https://www.lavastone.cz">
              <p>CZ</p>
            </Link>
          </div>
        )}

        <Link href="/favourite">
          <Badge text={counter}>
            {productId === "3" ? (
              <NavbarHeart productId="3" />
            ) : (
              <NavbarHeart />
            )}
          </Badge>
        </Link>
        {productId === "3" ? (
          <NavbarHamburger productId="3" onClick={toggleNavbar} />
        ) : (
          <NavbarHamburger onClick={toggleNavbar} />
        )}
      </div>
      {isExpanded && (
        <>
          <div className={`expanded-navbar ${whiteColor}`}>
            <NavbarSet onClick={toggleNavbarCancel} />
            <div className="navbar_both">
              <div>
                <h2>Značky</h2>
                <Link href="/product/1" onClick={toggleNavbar}>
                  <p className="hover-underline-animation">Pietracolata</p>
                </Link>
                <Link href="/product/2" onClick={toggleNavbar}>
                  <p>Fucina</p>
                </Link>
                <Link href="/product/3" onClick={toggleNavbar}>
                  <p>Sansone</p>
                </Link>
              </div>
              <div>
                <h2>{basic[0].navbar_ostatne}</h2>
                <Link href="/" onClick={toggleNavbar}>
                  <p>Domov</p>
                </Link>
                <Link href="/about" onClick={toggleNavbar}>
                  <p>O nás</p>
                </Link>
                <Link href="/services" onClick={toggleNavbar}>
                  <p>Služby</p>
                </Link>
                <Link href="/contact" onClick={toggleNavbar}>
                  <p>Kontakt</p>
                </Link>
              </div>
              <div className="languages_mobile">
                <p className="font_weight600"> SK</p>
                <Link href="https://www.lavastone.cz">
                  <p>CZ</p>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

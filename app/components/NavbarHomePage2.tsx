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

const NavbarHomePage2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const { counter } = useCounterStore();

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleNavbarCancel = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > window.innerHeight * 0.5) {
          setIsNavbarVisible(true);
        } else {
          setIsNavbarVisible(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      className={`navbar_homepage2 ${!isNavbarVisible ? "hidden" : ""}`}
      style={{ display: isNavbarVisible ? "flex" : "none" }}
    >
      <Link href="/">
        <NavbarLogo />
      </Link>
      <div className="navbar_second_group">
        <div className="languages ">
          <p className="font_weight600"> SK</p>
          <Link href="https://www.lavastone.cz">
            <p className="">CZ</p>
          </Link>
        </div>

        <Link href="/favourite">
          <Badge text={counter}>
            <NavbarHeart />
          </Badge>
        </Link>

        <NavbarHamburger onClick={toggleNavbar} />
      </div>
      {isExpanded && (
        <div className={`expanded-navbar`}>
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
      )}
    </div>
  );
};

export default NavbarHomePage2;

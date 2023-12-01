"use client";

import Link from "next/link";
import { basic } from "../data/ProductsDataSk";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="footer line">
        <div className="inside margin_top_3">
          <div className="footer_first">
            <Link href="/">
              <Image
                src="/biele_logo.svg"
                alt="Biele logo"
                className="footer_img"
                width={200}
                height={100}
              />
            </Link>

            <div className="footer_section">
              <h3>Kontakt</h3>
              <div className="footer_text">
                <p>
                  Tel:{" "}
                  <span style={{ textDecoration: "underline" }}>
                    +421 905 273 767
                  </span>
                </p>
                <p>
                  E-mail:{" "}
                  <span style={{ textDecoration: "underline" }}>
                    hello@lavastone.sk
                  </span>
                </p>
              </div>
              <div className="socials">
                <Link href="https://www.facebook.com/lavastone.sk">
                  <Image
                    src="/facebook.svg"
                    alt="Facebook icon"
                    width={20}
                    height={20}
                    className="socials_img"
                  />
                </Link>
                <Link href="https://www.instagram.com/lavastone_/">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram icon"
                    width={20}
                    height={20}
                    className="socials_img"
                  />
                </Link>
                <Link href="https://www.linkedin.com">
                  <Image
                    src="/linked_in.svg"
                    alt="Linked in icon"
                    width={20}
                    height={20}
                    className="socials_img"
                  />
                </Link>
              </div>
            </div>
            <div className="footer_section">
              <h3>Stránky</h3>
              <div className="footer_text">
                <div className="footer_both">
                  <div className="footer_text">
                    <Link href="/about">
                      <p>O nás</p>
                    </Link>
                    <Link href="/services">
                      <p>Služby</p>
                    </Link>
                    <Link href="/favourite">
                      <p>{basic[0].footer_oblubene}</p>
                    </Link>
                    <Link href="/contact">
                      <p>Kontakt</p>
                    </Link>
                  </div>
                  <div className="footer_text">
                    <Link href="/product/1">
                      <p>Pietracolata</p>
                    </Link>
                    <Link href="/product/2">
                      <p>Fucina</p>
                    </Link>
                    <Link href="/product/3">
                      <p>Sansone</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_section">
              <h3>{basic[0].footer_fakt_udaje}</h3>
              <div className="footer_text">
                <p>IČO: 35977329</p>
                <p>DIČ: 2022123125</p>
                <p>IČDPH: SK2022123125</p>
              </div>
            </div>
          </div>
          <div className="footer_second"></div>
        </div>
      </div>
      <div className="footer_copyright_cond">
        <div className="footer_inside ">
          <p>© Copyright 2023 Lavastone s.r.o. - {basic[0].footer_prava}</p>

          <p style={{ textDecoration: "underline" }}>
            <Link href="/privacy-policy">{basic[0].footer_podmienky}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

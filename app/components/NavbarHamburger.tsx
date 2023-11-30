import { useEffect, useState } from "react";

interface Props {
  productId?: string;
  onClick?: () => void;
}

const NavbarHamburger = ({ onClick, productId }: Props) => {
  const [primaryColor, setPrimaryColor] = useState("");

  useEffect(() => {
    if (productId === "3") {
      setPrimaryColor("heart_stroke_ccc");
    } else {
      setPrimaryColor("");
    }
  }, [productId]);
  return (
    <svg
      width="43"
      height="18"
      viewBox="0 0 43 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hamburger"
      onClick={onClick}
    >
      <path
        d="M0 1H42.5"
        stroke="#171717"
        strokeWidth="1.62733"
        className={primaryColor}
      />
      <path
        d="M0 16.8667H42.5"
        stroke="#171717"
        strokeWidth="1.62733"
        className={primaryColor}
      />
      <path
        d="M21.3809 8.72998L42.4989 8.72998"
        stroke="#171717"
        strokeWidth="1.62733"
        className={primaryColor}
      />
    </svg>
  );
};

export default NavbarHamburger;

import { useEffect, useState } from "react";

interface Props {
  rotation?: boolean;
  productId?: string;
}

const ToggleArrow = ({ rotation, productId }: Props) => {
  const [rotate, setRotate] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");

  useEffect(() => {
    if (rotation) {
      setRotate("rotate90");
    } else {
      setRotate("rotate90back");
    }
  }, [rotation]);

  useEffect(() => {
    if (productId === "3") {
      setPrimaryColor("heart_stroke_ccc");
    } else {
      setPrimaryColor("heart_stroke_171717");
    }
  }, [productId]);
  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`togggle_arrow ${rotate}`}
    >
      <path
        d="M1 1H52M52 1V52M52 1L1 52"
        stroke="#171717"
        strokeWidth="2"
        className={primaryColor}
      />
    </svg>
  );
};

export default ToggleArrow;

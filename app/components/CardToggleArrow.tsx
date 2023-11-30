import { useEffect, useState } from "react";

interface Props {
  isHovered?: boolean;
}

const CardToggleArrow = ({ isHovered }: Props) => {
  const [whiteColor, setWhiteColor] = useState("");
  const [move, setMove] = useState("");

  useEffect(() => {
    if (isHovered) {
      setMove("move_xy");
      setWhiteColor("white_stroke");
    } else {
      setWhiteColor("heart_stroke_171717");
      setMove("move_xy_back");
    }
  }, [isHovered]);

  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="#171717"
      xmlns="http://www.w3.org/2000/svg"
      className={`card_togggle_arrow  ${move}`}
    >
      <path
        d="M1 1H52M52 1V52M52 1L1 52"
        stroke="#171717"
        strokeWidth="2"
        className={whiteColor}
      />
    </svg>
  );
};

export default CardToggleArrow;

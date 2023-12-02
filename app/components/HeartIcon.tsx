"use client";

import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useCounterStore from "../counter/store";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

interface Props {
  image_src: string;
  onUpdateFavorites?: () => void;
}

const HeartIcon = ({ image_src, onUpdateFavorites }: Props) => {
  const { incrementWithFavorite, decrementWithRemove, favoriteImages } =
    useCounterStore();
  const [isFilled, setIsFilled] = useState(favoriteImages.includes(image_src));
  const [isClicked, setIsClicked] = useState(isFilled);

  const { productId } = useParams();

  useEffect(() => {
    if (productId === "1" || productId === "2" || productId === "3") {
      setIsFilled(favoriteImages.includes(image_src));
      setIsClicked(favoriteImages.includes(image_src));
    }
  }, [favoriteImages, image_src]);

  const notify = () =>
    toast.success("Pridané do obľúbených", {
      style: {
        fontFamily: "Manrope",
        border: "1px solid #171717",
        padding: "16px",
        backgroundColor: productId === "2" ? "white" : "#cccccc",
        borderRadius: "0px",
        boxShadow: "none",
        color: "#171717",
        textTransform: "uppercase",
        fontSize: "16px",
      },
      icon: <></>,
    });

  const toggleHeart = () => {
    if (isClicked) {
      setIsFilled(false);
      onUpdateFavorites?.();
      decrementWithRemove(image_src);
    } else {
      notify();
      setIsFilled(true);
      onUpdateFavorites?.();
      incrementWithFavorite(image_src);
    }
    setIsClicked(!isClicked);
  };

  // Update local storage after the state is modified

  localStorage.setItem("favoriteImages", JSON.stringify(favoriteImages));

  return (
    <>
      <Toaster />
      <div className="heart_icon_img" onClick={toggleHeart}>
        {isFilled ? (
          <img src="/heart_filled.svg" alt="Srdce" />
        ) : (
          <img src="/heart_outline.svg" alt="Srdce" />
        )}
      </div>
    </>
  );
};

export default HeartIcon;

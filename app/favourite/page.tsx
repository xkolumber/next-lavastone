"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import FavouriteSkeleton from "../components/FavouriteSkeleton";
import HeartIcon from "../components/HeartIcon";
import { ClipLoader } from "react-spinners";
import { basic } from "../data/ProductsDataSk";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [favoriteImages, setFavoriteImages] = useState(
    JSON.parse(localStorage.getItem("favoriteImages") || "[]")
  );
  const initialFavoriteImages = JSON.parse(
    localStorage.getItem("favoriteImages") || "[]"
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const updateFavoriteImages = () => {
    setFavoriteImages(
      JSON.parse(localStorage.getItem("favoriteImages") || "[]")
    );
    console.log("Favorite images:", favoriteImages);
  };

  const skeletons = [1, 2, 3, 4];

  /*Popup functionality*/

  const toggleEmail = () => {
    setPopUpEmail(!popUpEmail);
  };

  const popupRef = useRef<HTMLDivElement>(null);
  const popupRef2 = useRef<HTMLDivElement>(null);

  const [popUpFinal, setPopUpFinal] = useState(false);
  const [popUpEmail, setPopUpEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const closeAll = () => {
    setPopUpEmail(false);
    setPopUpFinal(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setPopUpEmail(false);
      }
    };

    if (popUpEmail) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popUpEmail]);

  /*Popup final*/
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef2.current &&
        !popupRef2.current.contains(event.target as Node)
      ) {
        setPopUpFinal(false);
      }
    };

    if (popUpFinal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popUpFinal]);
  /*Popup final*/
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef2.current &&
        !popupRef2.current.contains(event.target as Node)
      ) {
        setPopUpFinal(false);
      }
    };

    if (popUpFinal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popUpFinal]);

  /*Validating email*/

  const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
  });

  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const response = await fetch(process.env.BACKEND_API2!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, images: favoriteImages }),
      });

      if (response.ok) {
        reset();
        setPopUpFinal(true);
        console.log("Email sent successfully!");
        setIsLoading(false);
      } else {
        console.error("Failed to send email");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="product_introduction product_white">
        <div className="fixed_height" />
        <div className="inside">
          <h1>{basic[0].favourite_title}</h1>
          <p>{basic[0].favourite_description}</p>
          <div className="change_row_column_buttons">
            <Link href="/contact">
              <button className="btn btn--secondary">
                {basic[0].button_chcem_produkty}
              </button>
            </Link>
            <button className="btn btn--secondary" onClick={toggleEmail}>
              {basic[0].button_poslat_email}
            </button>
          </div>
          <div className="product_images">
            {!imageLoaded &&
              initialFavoriteImages.length > 0 &&
              skeletons.map((skeleton) => <FavouriteSkeleton key={skeleton} />)}
            {initialFavoriteImages.map((fav_image: string) => (
              <div key={fav_image} className="image-container">
                <Image
                  src={fav_image}
                  alt="Favourite images"
                  onLoad={handleImageLoad}
                  width={1000}
                  height={1000}
                  priority={true}
                />

                <HeartIcon
                  image_src={fav_image}
                  onUpdateFavorites={updateFavoriteImages}
                />
              </div>
            ))}
          </div>
        </div>
        {popUpEmail && (
          <div>
            <div className="popup_background"></div>
            <div className="popup_email" ref={popupRef}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  id="email"
                  placeholder="*E-MAIL"
                  className="popup_input"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="error_message">{errors.email.message}</p>
                )}
                <button
                  className="btn btn--secondary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ClipLoader
                      size={20}
                      color={"#ffffff"}
                      loading={isLoading}
                    />
                  ) : (
                    "Odoslať"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
        {popUpFinal && (
          <div>
            <div className="popup_email" ref={popupRef2}>
              <p className="popup_text">
                POSLALI SME VÁM DIZAJNY, KTORÉ STE SI ZAMILOVALI
              </p>
              {errors.email && (
                <p className="error_message">{errors.email.message}</p>
              )}
              <div>
                {" "}
                <button className="btn btn--popup" onClick={closeAll}>
                  Naspať
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;

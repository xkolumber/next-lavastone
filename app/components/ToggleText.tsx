"use client";
import { useEffect, useState } from "react";
import ToggleArrow from "./ToggleArrow";
import Image from "next/image";

interface Props {
  title: string;
  text: string;
  productId?: string;
  isService?: boolean;
  img_src?: string;
}

function ToggleText({ title, text, productId, isService, img_src }: Props) {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };
  const [primaryColor, setPrimaryColor] = useState("");
  const [customBorder, setCustomBorder] = useState("");

  useEffect(() => {
    if (productId === "3") {
      setCustomBorder("custom_border_primary_bottom");
      setPrimaryColor("text_ccc");
    } else {
      setCustomBorder("");
      setPrimaryColor("");
    }
  }, [productId]);

  return (
    <div>
      <div className={`toogle ${primaryColor} ${customBorder}`}>
        <div className="toggle_">
          <div className="toggle_images_title">
            {!isService && (
              <div className="toggle_images">
                <Image
                  src="/magma_layer.svg"
                  alt="Magma layer"
                  className="togggle_layer"
                  width={35}
                  height={35}
                />
                <Image
                  src={img_src!}
                  alt="Icon element "
                  className="toggle_icon_element"
                  width={20}
                  height={20}
                />
              </div>
            )}
            <h3 onClick={toggleText} className="toggle_title">
              {title}
              {showText ? (
                <ToggleArrow productId={productId} rotation={true} />
              ) : (
                <ToggleArrow productId={productId} />
              )}
            </h3>
          </div>
          {showText && (
            <div>
              {isService ? (
                <p className="toggle_text_service_no_padding">{text}</p>
              ) : (
                <p className="toggle_text_service">{text}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToggleText;

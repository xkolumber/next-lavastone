"use client";
import React, { useEffect, useState } from "react";

interface Props {
  productId?: string;
  children: React.ReactNode;
}

const Button = ({ productId, children }: Props) => {
  const [customClassName, setCustomClassName] = useState("");

  useEffect(() => {
    // Set custom class name based on productId
    if (productId === "1") {
      setCustomClassName("btn--primary");
    } else if (productId === "2") {
      setCustomClassName("btn--secondary");
    } else if (productId === "3") {
      setCustomClassName("btn--tertiary");
    } else {
      setCustomClassName("btn--primary");
    }
  }, [productId]);
  return <button className={`btn ${customClassName}`}>{children}</button>;
};

export default Button;

"use client";

import Button from "@/app/components/Button";
import EyesDesign from "@/app/components/EyesDesign";
import HeartIcon from "@/app/components/HeartIcon";
import ProductSkeleton from "@/app/components/ProductSkeleton";
import ToggleText from "@/app/components/ToggleText";
import UniqueElement from "@/app/components/UniqueElement";
import { basic, products } from "@/app/data/ProductsDataSk";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

interface ProductData {
  id: number;
  title: string;
  title_image: string;
  title_description: string;
  second_title: string;
  second_title_description: string;
  toggles: {
    id: number;
    title: string;
    img_src: string;
    description: string;
  }[];
  design_title: string;
  images: string[];
  collection?: string[];
  six_group?: string[];
  last_four?: string[];
}

const Page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [customClassName, setCustomClassName] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (params.id && Array.isArray(products)) {
      const productById = products.find(
        (item) => item.id.toString() === params.id
      );
      setProduct(productById || null);
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    if (product) {
      if (params.id === "1") {
        setCustomClassName("product_silver");
        setPrimaryColor("");
      } else if (params.id === "2") {
        setCustomClassName("product_white");
        setPrimaryColor("");
      } else {
        setCustomClassName("product_black");
        setPrimaryColor("text_ccc");
      }
    }
  }, [product, params.id]);

  if (loading) {
    return (
      <div className={`product_introduction ${customClassName}`}>
        <div className="fixed_height" />
        <div className="inside">
          <div className="change_row_column">
            <div>
              <h1 className={`product_id ${primaryColor} font_13`}>
                <Skeleton count={1} width={80} borderRadius={10} />
              </h1>
            </div>
            <div>
              <h1 className={`${primaryColor} font_13`}>
                <Skeleton count={1} width={300} borderRadius={10} />
              </h1>
              <p className={primaryColor}>
                <Skeleton count={4} width={300} borderRadius={10} />
              </p>
              <div className="margin_bottom_5"></div>
              <Link href="/contact">
                <div className="mt-8">
                  <Skeleton
                    count={1}
                    width={120}
                    height={30}
                    borderRadius={10}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <p>No data</p>;
  }

  const firstFourItems = product.images.slice(0, 4);
  const lastSixItems = product.images.slice(4);

  return (
    <main>
      <div className={`product_introduction ${customClassName}`}>
        <div className="fixed_height" />
        <div className="inside">
          <div className="change_row_column">
            <div>
              <h1 className={`product_id ${primaryColor} font_13`}>
                0{params.id}
              </h1>
            </div>
            <div>
              <h1 className={`${primaryColor} font_13`}>{product.title}</h1>
              <p className={primaryColor}>{product.title_description}</p>
              <Link href="/contact">
                <Button productId={params.id}> {basic[0].button_zaujem}</Button>
                <div className="margin_bottom_5"></div>
              </Link>
            </div>
          </div>
        </div>
        {!imageLoaded && <ProductSkeleton />}
        <Image
          src={product.title_image}
          alt={product.title}
          className="product_image_main"
          onLoad={handleImageLoad}
          width={1000}
          height={1000}
          priority={true}
        />

        <div className="inside">
          <h2 className={primaryColor}>{product.second_title}</h2>
          <div className="product_description">
            <p className={`w50 ${primaryColor}`}>
              {product.second_title_description}
            </p>

            {params.id === "3" ? (
              <div className="toggle_list custom_border_primary_top">
                {product.toggles.map((toggle, id) => (
                  <ToggleText
                    key={id}
                    title={toggle.title}
                    text={toggle.description}
                    productId={params.id}
                    isService={false}
                    img_src={toggle.img_src}
                  />
                ))}
              </div>
            ) : (
              <div className="toggle_list">
                {product.toggles.map((toggle, id) => (
                  <ToggleText
                    key={id}
                    title={toggle.title}
                    text={toggle.description}
                    productId={params.id}
                    img_src={toggle.img_src}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="inside">
          <h2 className={`${primaryColor} max1200`}>{product.design_title}</h2>
          <div className="product_images">
            {firstFourItems.map((image_src, index) => (
              <div className="image-container" key={index}>
                <Image
                  src={image_src}
                  alt="Product PietraColata"
                  className="image"
                  width={1000}
                  height={1000}
                  priority={true}
                />

                <HeartIcon image_src={image_src} />
              </div>
            ))}
          </div>
        </div>
        <EyesDesign productId={params.id} />

        <div className="inside">
          <div className="product_images">
            {lastSixItems.map((image_src, index) => (
              <div className="image-container" key={index}>
                <Image
                  src={image_src}
                  alt={`Product ${product.title} `}
                  className="image"
                  width={1000}
                  height={1000}
                  priority={true}
                />
                <HeartIcon image_src={image_src} />
              </div>
            ))}
          </div>

          {product.collection && (
            <div className="collection_">
              {product.collection.map((image_src, index) => (
                <Image
                  key={`product-image-${index}`}
                  src={image_src}
                  alt={`Product ${product.title} `}
                  className="image"
                  width={1000}
                  height={1000}
                  priority={true}
                />
              ))}
            </div>
          )}
          {product.six_group?.map((image_src, index) => (
            <Image
              key={`product-image-${index}`}
              src={image_src}
              alt={`6 products `}
              className="six_images"
              width={100}
              height={100}
              priority={true}
            />
          ))}
          <div className="product_images">
            {product.last_four?.map((image_src, index) => (
              <div className="image-container" key={index}>
                <Image
                  src={image_src}
                  alt={`Product ${product.title} `}
                  className="image"
                  width={500}
                  height={500}
                  priority={true}
                />

                <HeartIcon image_src={image_src} />
              </div>
            ))}
          </div>
        </div>
        <UniqueElement productId={params.id} />
      </div>
    </main>
  );
};

export default Page;

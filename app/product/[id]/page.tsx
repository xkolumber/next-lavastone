import Button from "@/app/components/Button";
import EyesDesign from "@/app/components/EyesDesign";
import HeartIcon from "@/app/components/HeartIcon";
import ToggleText from "@/app/components/ToggleText";
import UniqueElement from "@/app/components/UniqueElement";
import { products, basic } from "@/app/data/ProductsDataSk";
import Link from "next/link";

async function getData(id: string) {
  const data = products.find((item) => item.id.toString() === id);
  return data;
}

const page = async ({ params }: { params: { id: string } }) => {
  const product = await getData(params.id);

  if (!product) {
    return "no data";
  }
  const firstFourItems = product.images.slice(0, 4);
  const lastSixItems = product.images.slice(4);

  return (
    <main>
      <div className={`product_introduction `}>
        {/* <div className={`product_introduction ${customClassName}`}> */}
        <div className="fixed_height" />
        <div className="inside">
          <div className="change_row_column">
            <div>
              <h1 className={`product_id font_13`}>
                {/* <h1 className={`product_id ${primaryColor} font_13`}> */}0
                {params.id}
              </h1>
            </div>
            <div>
              {/* <h1 className={`${primaryColor} font_13`}>{product.title}</h1>
              <p className={primaryColor}>{product.title_description}</p> */}
              <Link href="/contact">
                <Button productId={params.id}> {basic[0].button_zaujem}</Button>
                <div className="margin_bottom_5"></div>
              </Link>
            </div>
          </div>
        </div>
        {/* {!imageLoaded && <ProductSkeleton />} */}
        <img
          src={product.title_image}
          alt={product.title}
          className="product_image_main"
          //   onLoad={handleImageLoad}
        />
        <div className="inside">
          {/* <h2 className={primaryColor}>{product.second_title}</h2> */}
          <div className="product_description">
            <p className={`w50 `}>
              {/* <p className={`w50 ${primaryColor}`}> */}
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
          {/* <h2 className={`${primaryColor} max1200`}>{product.design_title}</h2> */}
          <div className="product_images">
            {firstFourItems.map((image_src, index) => (
              <div className="image-container" key={index}>
                <img
                  src={image_src}
                  alt="Product PietraColata"
                  className="image"
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
                <img
                  src={image_src}
                  alt={`Product ${product.title} `}
                  className="image"
                />
                <HeartIcon image_src={image_src} />
              </div>
            ))}
          </div>

          {product.collection && (
            <div className="collection_">
              {product.collection.map((image_src, index) => (
                <img
                  key={`product-image-${index}`}
                  src={image_src}
                  alt={`Product ${product.title} `}
                  className="image"
                />
              ))}
            </div>
          )}
          {product.six_group?.map((image_src, index) => (
            <img
              key={`product-image-${index}`}
              src={image_src}
              alt={`6 products `}
              className="six_images"
            />
          ))}
          <div className="product_images">
            {product.last_four?.map((image_src, index) => (
              <div className="image-container" key={index}>
                <img
                  src={image_src}
                  alt={`Product ${product.title} `}
                  className="image"
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

export default page;
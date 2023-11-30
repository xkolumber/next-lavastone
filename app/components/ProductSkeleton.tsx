import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FavouriteSkeleton = () => {
  return (
    <div className="product_image_main">
      <Skeleton height={1000} />
    </div>
  );
};

export default FavouriteSkeleton;

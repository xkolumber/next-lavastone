import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FavouriteSkeleton = () => {
  return (
    <div className="image-container">
      <Skeleton height={400} />
    </div>
  );
};

export default FavouriteSkeleton;

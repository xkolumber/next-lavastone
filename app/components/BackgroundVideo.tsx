import { useEffect, useState } from "react";
import Image from "next/image";
interface Props {
  videoSource: string;
  placeholderImage: string;
}

const BackgroundVideo = ({ videoSource, placeholderImage }: Props) => {
  return (
    <>
      {/* {!videoLoaded && (
        <img
          src={placeholderImage}
          alt="Placeholder Image"
          className="placeholder_image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
      )} */}

      <video
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        id="background-video"
        // style={{
        //   opacity: videoLoaded ? 1 : 0,
        // }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default BackgroundVideo;

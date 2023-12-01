"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
interface Props {
  videoSource: string;
  placeholderImage: string;
}

const BackgroundVideo = ({ videoSource, placeholderImage }: Props) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById("background-video");

    const handleVideoLoaded = () => {
      setVideoLoaded(true);
    };

    video!.addEventListener("loadeddata", handleVideoLoaded);

    return () => {
      video!.removeEventListener("loadeddata", handleVideoLoaded);
    };
  }, []);

  return (
    <>
      {!videoLoaded && (
        <div className="placeholder_image">
          <Image
            src={placeholderImage}
            alt="Placeholder Image"
            fill
            priority={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <video
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        id="background-video"
        style={{
          opacity: videoLoaded ? 1 : 0,
        }}
      >
        <source src={videoSource} type="video/mp4" />
        {/* Add more <source> tags for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
      {/* Other content within the .introduction div */}
    </>
  );
};

export default BackgroundVideo;

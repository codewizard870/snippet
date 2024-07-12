import { useRef, useState } from "react";
import JoinButton from "../../../components/joinButton";

const HowItWorks = () => {
  // const videoRef = useRef(null);
  // const thumbnailRef = useRef(null);

  // const [viewThumbnail, setViewThumbnail] = useState(true);

  // const onPlayVideo = () => {
  //   if (viewThumbnail && videoRef.current && thumbnailRef.current) {
  //     setViewThumbnail(false);
  //     (thumbnailRef.current as any).style.display = "none";
  //     (videoRef.current as any).style.display = "block";
  //     (videoRef.current as any).play();
  //   }
  // };
  return (
    <div className="flex flex-col items-center py-[53px]">
      <p className="text-[38px] font-bold">See How it Works!</p>
      <div
        className="mt-[50px] rounded-lg cursor-pointer"
        // onClick={onPlayVideo}
      >
        {/* <img
          src="/assets/howitworks/thumbnail.png"
          className="w-[895px]"
          ref={thumbnailRef}
        />
        <video
          width="895"
          height="546"
          controls
          className="hidden rounded-lg"
          ref={videoRef}
        >
          <source
            src="https://reallifenetwork.s3.amazonaws.com/drop/biblediscovery/a190d8b2-67a3-4100-a05b-603c012d78f2.mp4"
            type="video/mp4"
          />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video> */}
        <iframe
          width="895"
          height="546"
          src="https://www.youtube.com/embed/Y25yXtxH6qY"
        ></iframe>

      </div>
        <div className="flex justify-center mt-4">
          <JoinButton className="md:px-4" />
        </div>
    </div>
  );
};

export default HowItWorks;

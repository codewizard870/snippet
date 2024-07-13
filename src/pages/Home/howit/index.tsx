import { useRef, useState } from "react";
import JoinButton from "../../../components/joinButton";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center py-[53px]">
      <p className="text-2xl md:text-[38px] font-bold">See How it Works!</p>
      <div className="relative mt-[50px] rounded-lg cursor-pointer w-[90vw] max-w-[895px] flex jusitfy-center items-center">
        <img src="/assets/howitworks/frame.png" className="relative z-10" />
        <iframe
          width="90%"
          height="85%"
          src="https://www.youtube.com/embed/Y25yXtxH6qY"
          className="absolute left-[5%] top-[10%] z-20"
        ></iframe>
      </div>
      <div className="flex justify-center mt-4">
        <JoinButton className="md:px-4" />
      </div>
    </div>
  );
};

export default HowItWorks;

import { useRef, useState } from "react";
import JoinButton from "../../../components/joinButton";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center py-[53px]">
      <p className="text-2xl md:text-[38px] font-bold">See How it Works!</p>
      <div
        className="mt-[50px] rounded-lg cursor-pointer w-[350px] h-[300px] md:w-[895px] md:h-[546px]"
      >
        <iframe
          width="100%"
          height="100%"
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

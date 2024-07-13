import { useEffect, useState } from "react";
import Card from "./card";
import AnimationBanner from "./animation";

const Build = () => {
  

  return (
    <div className="w-full flex flex-col lg:flex-row items-center px-6 md:px-[100px] my-[58px] justify-between gap-10">
      <div className="w-full md:w-auto">
        <p className="text-2xl md:text-[38px] font-bold tracking-tight !leading-normal">
          Build a Second Brain that <br /> grows with you
        </p>
        <p className="font-Mulish text-sm md:text-[21px] mt-5 !leading-normal">
          A simple, one time setup helps you reclaim hours every
          <br /> week!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[18px] w-full">
          {Cards.map((card, index) => (
            <Card data={card} key={index} />
          ))}
        </div>
      </div>
      <div className="relative w-[300px] h-[300px] md:min-w-[374px] md:min-h-[457px]">
        <AnimationBanner />
      </div>
    </div>
  );
};

export default Build;

const Cards = [
  {
    icon: "/assets/build/1.png",
    label: "Browser Bookmarks",
  },
  {
    icon: "/assets/build/2.png",
    label: "Twitter Posts",
  },
  {
    icon: "/assets/build/3.png",
    label: "Podcasts & YT Videos",
  },
  {
    icon: "/assets/build/4.png",
    label: "Access Knowledge instantly!",
  },
];

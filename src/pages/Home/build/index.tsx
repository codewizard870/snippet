import { useEffect, useState } from "react";
import Card from "./card";
import AnimationBanner from "./animation";

const Build = () => {
  

  return (
    <div className="w-full flex flex-col md:flex-row items-center px-6 my-[60px] justify-between gap-10">
      <div>
        <p className="text-2xl md:text-[38px] font-bold tracking-tight !leading-normal">
          Build a Second Brain that <br /> grows with you
        </p>
        <p className="font-Mulish text-sm md:text-[21px] mt-5 !leading-normal">
          A simple, one time setup helps you reclaim hours every
          <br /> week!
        </p>
        <div className="flex flex-wrap gap-5 mt-[18px] w-full">
          {Cards.map((card, index) => (
            <Card data={card} key={index} />
          ))}
        </div>
      </div>
      <div className="relative w-[250px] md:w-[374px]">
        {/* <img
          src="/assets/build/banner.png"
          className="w-[250px] md:w-[374px] rounded-lg"
        /> */}
        <AnimationBanner />
        {/* <svg
          fill="none"
          width="437.15625"
          height="520"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 pointer-events-none stroke-2 transform-gpu"
          viewBox="0 0 437.15625 520"
        >
          <path
            d="M0 0.804382L167.701 0.804384L254.701 107.847"
            stroke="gray"
          />
          <path
            d="M0 0.804382L167.701 0.804384L254.701 107.847"
            stroke="url(#:R2qii6p6jda:)"
          />
          <defs>
            <linearGradient
              className="transform-gpu"
              id=":R2qii6p6jda:"
              gradientUnits="userSpaceOnUse"
              x1={`${x}%`}
              x2={`${x + 20}%`}
              y1="0%"
              y2="0%"
            >
              <stop stop-color="#ffaa40" stop-opacity="0"></stop>
              <stop stop-color="#ffaa40"></stop>
              <stop offset="32.5%" stop-color="#ff0000"></stop>
              <stop offset="100%" stop-color="#ff0000" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg> */}
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

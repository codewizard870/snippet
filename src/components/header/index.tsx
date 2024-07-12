import React from "react";
import { useNavigate } from "react-router-dom";
import JoinButton from "../joinButton";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 z-20 flex justify-between w-full px-6 py-6 border-b md:px-20 bg-gray-2 border-b-gray-1/10">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/assets/img/logo.png" className="w-8" />
        <span className="text-xl md:text-[21px]">
          second<span className="font-bold">BrainAI</span>
        </span>
      </div>
      <div className="flex gap-12">
        <div className="flex items-center gap-2 md:gap-12">
          {Routes.map((route, index) => (
            <a href={route.href} key={index}>
              <span className="hidden text-sm font-semibold md:block md:text-base text-primary-default">
                {route.label}
              </span>
              <img src={route.icon} className="w-6 md:hidden" />
            </a>
          ))}
        </div>
        <JoinButton />
      </div>
    </div>
  );
};

export default Header;

const Routes = [
  {
    label: "Blog",
    href: "/blog",
    icon: "/assets/header/blog.png",
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: "/assets/header/pricing.png",
  },
];

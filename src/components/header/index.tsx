import React from "react";
import { useNavigate } from "react-router-dom";
import JoinButton from "../joinButton";
import { useAppDispatch } from "../../state/hooks";
import { toggleMobileMenu } from "../../state/global";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickMobileMenu = () => {
    dispatch(toggleMobileMenu(true));
  };

  return (
    <div className="fixed top-0 z-30 flex justify-between w-full px-6 py-6 border-b md:px-20 bg-gray-2 border-b-gray-1/10">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/assets/img/logo.png" className="w-8" />
        <span className="hidden md:block text-xl md:text-[21px]">
          second<span className="font-bold">BrainAI</span>
        </span>
      </div>
      <div className="flex items-center gap-12">
        <div className="items-center hidden gap-2 md:flex md:gap-12">
          {Routes.map((route, index) => (
            <a href={route.href} key={index}>
              <span className="text-sm font-semibold md:block md:text-base text-primary-default">
                {route.label}
              </span>
            </a>
          ))}
        </div>

        <JoinButton />
        <div className="md:hidden" onClick={onClickMobileMenu}>
          <img src="/assets/header/menu.svg" className="w-6" />
        </div>
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

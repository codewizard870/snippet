import { useEffect, useRef } from "react";
import { toggleMobileMenu, toggleWaitList } from "../../state/global";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import JoinButton from "../joinButton";
import { ROUTES } from "../../constants";

const MobileMenu = () => {
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.globalState.bMobileMenu);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");

      if (ref.current) {
        setTimeout(() => {
          (ref.current as any).style.width = "50vw";
        }, 100);
      }
    } else {
      document.body.classList.remove("no-scroll");

      if (ref.current) {
        (ref.current as any).style.width = "0vw";
      }
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div
      className={`${isOpen ? "fixed" : "hidden"} inset-0 bg-black/50 z-20`}
      onClick={() => dispatch(toggleMobileMenu(false))}
    >
      <div
        className={`absolute w-[0] h-screen bg-white right-0 transition-all duration-300`}
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-8 px-4 pt-20">
          {ROUTES.map((route, index) => (
            <a href={route.href} key={index}>
              <span className="text-sm md:block md:text-base">
                {route.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

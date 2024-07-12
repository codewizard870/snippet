import { useEffect } from "react";
import { toggleWaitList } from "../../state/global";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import JoinButton from "../joinButton";

const JoinWaitList = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.globalState.bWaitList);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div
      className={`${isOpen ? "fixed" : "hidden"} inset-0 bg-black/50 z-30`}
      onClick={() => dispatch(toggleWaitList(false))}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`w-[90vw] h-[540px] md:h-[647px] border border-primary-default flex justify-center items-center px-4 md:px-0 bg-white rounded-lg`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-[700px]">
            <p className="text-3xl md:text-[38px] font-semibold text-primary-default text-center">
              We’re Launching Soon!
            </p>
            <p className="text-base md:text-[21px] mt-4 text-center">
              Sign Up for our waitlist and get early access + discounts when our
              product launches!
            </p>
            <div className="mt-8">
              <p className="text-xs md:text-[13px] font-medium">Name:</p>
              <input className="w-full mt-1 border border-black/50 focus-visible:outline-none h-7 text-xs md:text-[13px] px-2" />
            </div>
            <div className="mt-5">
              <p className="text-xs md:text-[13px] font-medium">E-mail:</p>
              <input className="w-full mt-1 border border-black/50 focus-visible:outline-none h-7 text-xs md:text-[13px] px-2" />
            </div>
            <div className="mt-5">
              <p className="text-xs md:text-[13px] font-medium">
                Phone Number:
              </p>
              <div className="flex w-full gap-4 mt-1 ">
                <select
                  className="text-xs md:text-[13px] border border-black/50 focus-visible:outline-none h-7 px-2"
                  defaultValue="+1"
                >
                  {PhoneOptions.map((op, index) => (
                    <option value={op.value} key={index}>{op.label}</option>
                  ))}
                </select>
                <input className="w-full border border-black/50 focus-visible:outline-none h-7 text-xs md:text-[13px] px-2" />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-xs md:text-[13px] font-medium">
                Where did you hear about us?
              </p>
              <select className="text-xs md:text-[13px] border border-black/50 focus-visible:outline-none h-7 px-2 w-full">
                {WhereOptions.map((op, index) => (
                  <option value={op} key={index}>{op}</option>
                ))}
              </select>
            </div>
            <button
              className={`w-full mt-6 flex justify-center items-center px-3 md:px-[50px] py-2 md:py-[15px] gap-1 bg-primary-default hover:bg-primary-default/70 rounded-xl cursor-pointer `}
            >
              <img src="/assets/header/rocket.png" className="" />
              <span className="text-xs font-normal text-white md:text-base md:font-medium">
                Join the Waitlist
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitList;

const WhereOptions = [
  "LinkedIn",
  "Twitter",
  "Reddit",
  "Referral",
  "Facebook/Instagram Ads",
];

const PhoneOptions = [
  { label: "Argentina (+54)", value: "+54" },
  { label: "Australia (+61)", value: "+61" },
  { label: "Austria (+43)", value: "+43" },
  { label: "Belgium (+32)", value: "+32" },
  { label: "Brazil (+55)", value: "+55" },
  { label: "Canada (+1)", value: " +1" },
  { label: "China (+86)", value: "+86" },
  { label: "Denmark (+45)", value: "+45" },
  { label: "Egypt (+20)", value: "+20" },
  { label: "France (+33)", value: "+33" },
  { label: "Germany (+49)", value: "+49" },
  { label: "Greece (+30)", value: "+30" },
  { label: "Hong Kong (+852)", value: "+852" },
  { label: "India (+91)", value: "+91" },
  { label: "Indonesia (+62)", value: "+62" },
  { label: "Ireland (+353)", value: "+353" },
  { label: "Israel (+972)", value: "+972" },
  { label: "Italy (+39)", value: "+39" },
  { label: "Japan (+81)", value: "+81" },
  { label: "Malaysia (+60)", value: "+60" },
  { label: "Mexico (+52)", value: "+52" },
  { label: "Netherlands (+31)", value: "+31" },
  { label: "New Zealand (+64)", value: "+64" },
  { label: "Norway (+47)", value: "+47" },
  { label: "Philippines (+63)", value: "+63" },
  { label: "Portugal (+351)", value: "+351" },
  { label: "Russia (+7)", value: "+7" },
  { label: "Saudi Arabia (+966)", value: "+966" },
  { label: "Singapore (+65)", value: "+65" },
  { label: "South Africa (+27)", value: "+27" },
  { label: "South Korea (+82)", value: "+82" },
  { label: "Spain (+34)", value: "+34" },
  { label: "Sweden (+46)", value: "+46" },
  { label: "Switzerland (+41)", value: "+41" },
  { label: "Thailand (+66)", value: "+66" },
  { label: "Turkey (+90)", value: "+90" },
  { label: "United Arab Emirates (+971)", value: "+971" },
  { label: "United Kingdom (+44)", value: "+44" },
  { label: "United States (+1)", value: "+1" },
  { label: "Vietnam (+84)", value: "+84" },
];

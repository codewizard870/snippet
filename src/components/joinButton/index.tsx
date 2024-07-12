export default function JoinButton({ className }: { className?: string }) {
  return (
    <button
      className={`flex justify-center items-center px-3 md:px-[50px] py-2 md:py-[15px] gap-1 bg-primary-default hover:bg-primary-default/70 rounded-xl cursor-pointer ${className}`}
    >
      <img src="/assets/header/rocket.png" className="" />
      <span className="text-xs font-normal text-white md:text-base md:font-medium">
        Join the Waitlist
      </span>
    </button>
  );
}

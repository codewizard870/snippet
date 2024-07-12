import Card from "./card";

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
      <div className="min-w-max">
        <img
          src="/assets/build/banner.png"
          className="w-[250px] md:w-[374px] rounded-lg"
        />
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

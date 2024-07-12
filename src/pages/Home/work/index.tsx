import Card from "./card";

const Work = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mx-6 py-[60px] justify-between items-center gap-10">
      <div className="min-w-max">
        <img
          src="/assets/work/banner.png"
          className="w-[250px] md:w-[374px] rounded-lg"
        />
      </div>
      <div className="md:w-[630px]">
        <p className="text-2xl md:text-[38px] font-bold tracking-tight !leading-normal">
          Work with your Second Brain,
          <br />
          the way you want to
        </p>
        <p className="font-Mulish text-sm md:text-[21px] mt-5 !leading-normal">
          Organise information in a way that makes sense to you.
          <br /> Use it to superchange you productivity.
        </p>
        <div className="flex flex-wrap gap-5 mt-[18px] w-full">
          {Cards.map((card, index) => (
            <Card data={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

const Cards = [
  {
    icon: "/assets/work/1.png",
    label: "Move bookmarks across folders.",
  },
  {
    icon: "/assets/work/2.png",
    label: "Find information instantly!",
  },
  {
    icon: "/assets/work/3.png",
    label: "Query single documents.or entire folders of data",
  },
  {
    icon: "/assets/work/4.png",
    label: "One-Click Summaries. Notes & Explanations",
  },
];

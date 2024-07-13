import Card from "./card";

const Work = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mx-6 md:mx-[57px] py-[28px] justify-between items-center gap-10">
      <div className="flex max-w-[250px] lg:max-w-[374px]">
        <img
          src="/assets/work/banner.png"
          className="rounded-lg "
        />
      </div>
      <div className="lg:max-w-[630px]">
        <p className="text-2xl md:text-[38px] font-bold tracking-tight !leading-normal lg:w-[600px]">
          Work with your Second Brain, the way you want to
        </p>
        <p className="font-Mulish text-sm md:text-[21px] mt-5 !leading-normal lg:w-[570px]">
          Organise information in a way that makes sense to you.
          Use it to superchange you productivity.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[18px] w-full">
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
    label: "Query single documents, or entire folders of data",
  },
  {
    icon: "/assets/work/4.png",
    label: "One-Click Summaries. Notes & Explanations",
  },
];

import Card from "../build/card";

const Work = () => {
  return (
    <div className="flex flex-row w-full my-[60px]">
      <div className="flex w-1/2"></div>
      <div className="flex flex-col w-1/2 my-10">
        <p className="text-[38px] font-bold tracking-tight">Work with your Second Brain,<br />the way you want to</p>
        <p className="font-Mulish text-[21px] mt-5">Organise information in a way that makes sense to you.</p>
        <p className="font-Mulish text-[21px] mt-5">Use it to superchange you productivity.</p>
        <div className="grid grid-cols-2 gap-5 mt-[50px] w-full">
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
    label: "Move bookmarks across folders."
  },
  {
    icon: "/assets/work/2.png",
    label: "Find information instantly!"
  },
  {
    icon: "/assets/work/3.png",
    label: "Query single documents.or entire folders of data"
  },
  {
    icon: "/assets/work/4.png",
    label: "One-Click Summaries. Notes & Explanations"
  },
]
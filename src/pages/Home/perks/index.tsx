import Card from "./card";

const Perks = () => {
  return (
    <div className="mx-6 md:mx-[55px] my-[100px] flex flex-col items-center">
      <p className="text-[38px] font-bold tracking-tight pb-10">The perks are immeasurable</p>
      <div className="flex flex-row justify-start items-start w-full gap-6">
        {Cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Perks;

const Cards = [
  {
    icon: "/assets/perks/1.png",
    title: 'Find information in seconds',
    label: "Your favourite knowledge, available at your fingertips. Find relevant sources to solve your specific problem immediately."
  },
  {
    icon: "/assets/perks/2.png",
    title: 'Reclaim your time and attention',
    label: "Never spend hours trawling through your inbox or bookmarks again. Get the information you need. when you need it."
  },
  {
    icon: "/assets/perks/3.png",
    title: 'Cut the noise and focus on value',
    label: "Never spend hours trawling through your inbox or bookmarks again. Get the information you need. when you need it."
  },
]
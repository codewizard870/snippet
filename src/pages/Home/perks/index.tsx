import Card from "./card";

const Perks = () => {
  return (
    <div className="mx-6 md:mx-[55px] my-[42px] flex flex-col items-center">
      <p className="text-2xl md:text-[38px] font-bold tracking-tight pb-10 !leading-normal">
        The perks are immeasurable
      </p>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
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
    title: "Find information in seconds",
    label:
      "Your favourite knowledge, available at your fingertips. Find relevant sources to solve your specific problem immediately.",
  },
  {
    icon: "/assets/perks/2.png",
    title: "Reclaim your time and attention",
    label:
      "Never spend hours trawling through your inbox or bookmarks again. Get the information you need. when you need it.",
  },
  {
    icon: "/assets/perks/3.png",
    title: "Cut the noise and focus on value",
    label:
      "Learn better, write quicker, deepen your understanding. Find mission critical information and make it work for you in the least amount of time possible.",
  },
];

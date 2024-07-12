import Card from "../build/card";

const Flexible = () => {
  return (
    <div className="flex flex-row w-full my-[60px]">
      <div className="flex flex-col w-1/2">
        <p className="text-[38px] font-bold tracking-tight">Flexible use cases to suit your<br />specific requirements.</p>
        <p className="font-Mulish text-[21px] mt-5">From students to professionals, researchers to housewives</p>
        <p className="font-Mulish text-[21px] mt-5">- we have something for everyone.</p>
        <div className="grid grid-cols-2 gap-5 mt-[50px] w-full">
          {Cards.map((card, index) => (
            <Card data={card} key={index} />
          ))}
        </div>
      </div>
      <div className="flex w-1/2"></div>
    </div>
  );
};

export default Flexible;

const Cards = [
  {
    icon: "/assets/flexible/1.png",
    label: "Study for an Exam"
  },
  {
    icon: "/assets/flexible/2.png",
    label: "Research across multiple documents"
  },
  {
    icon: "/assets/flexible/3.png",
    label: "Find healthy recipes"
  },
  {
    icon: "/assets/flexible/4.png",
    label: "Boost professional productivity"
  },
]
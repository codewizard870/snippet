import Card from "../build/card";

const Flexible = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center px-6 my-[60px] gap-10">
      <div>
        <p className="text-2xl md:text-[38px] font-bold tracking-tight !leading-normal">
          Flexible use cases to suit your
          <br />
          specific requirements.
        </p>
        <p className="font-Mulish text-sm md:text-[21px] mt-5 !leading-normal">
          From students to professionals, researchers to housewives<br/>
          - we have something for everyone.
        </p>
        <div className="flex flex-wrap gap-5 mt-[18px] w-full">
          {Cards.map((card, index) => (
            <Card data={card} key={index} />
          ))}
        </div>
      </div>
      <div className="min-w-max">
        <img
          src="/assets/flexible/banner.png"
          className="w-[250px] md:w-[374px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default Flexible;

const Cards = [
  {
    icon: "/assets/flexible/1.png",
    label: "Study for an Exam",
  },
  {
    icon: "/assets/flexible/2.png",
    label: "Research across multiple documents",
  },
  {
    icon: "/assets/flexible/3.png",
    label: "Find healthy recipes",
  },
  {
    icon: "/assets/flexible/4.png",
    label: "Boost professional productivity",
  },
];

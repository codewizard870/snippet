import Card from "../build/card";

const Flexible = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-[57px] my-[58px] gap-10">
      <div className="lg:min-w-[612px] lg:max-w-[612px]">
        <p className="text-2xl md:text-[38px] font-bold tracking-tight !leading-normal lg:w-[600px]">
          Flexible use cases to suit your specific requirements.
        </p>
        <p className="font-Mulish text-sm md:text-[21px] mt-5 !leading-normal lg:w-[570px]">
          From students to professionals, researchers to housewives - we have
          something for everyone.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[18px] w-full">
          {Cards.map((card, index) => (
            <Card data={card} key={index} />
          ))}
        </div>
      </div>
      <div className="flex max-w-[250px] lg:max-w-[374px] ">
        <img src="/assets/flexible/banner.png" className="rounded-lg" />
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

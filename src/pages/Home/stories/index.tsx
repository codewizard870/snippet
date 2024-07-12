import Card from "./card";

const Stories = () => {
  return (
    <div className="mx-6 md:mx-[55px] my-[50px] md:my-[200px] flex flex-col items-center">
      <p className="text-2xl md:text-[38px] font-bold tracking-tight pb-6 text-center">Real Stories from Satisfied Customers</p>
      <p className="font-Mulish text-sm md:text-[21px]">See how we help students, researchers and professionals manage their data effectively.</p>
      <div className="flex flex-wrap gap-5 mt-[50px]">
        {Cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Stories;

const Cards = [
  {
    icon: "/assets/stories/1.png",
    label: "Dhruv Tek",
    email: 'Founder @Sonariabs.ai',
    content: '"As a founder - I constantly come across and save useful information, tutorials and competitor research from across the web for future use. However, going back in time to find this information when I need has always been a nightmare. secondBrain makes searching my digital library super intuitive, and saves me a ton of time every week"'
  },
  {
    icon: "/assets/stories/2.png",
    label: "Alexix Chartest-Descomme",
    email: 'Strategy & Insights @Google',
    content: '"As a founder - I constantly come across and save useful information, tutorials and competitor research from across the web for future use. However, going back in time to find this information when I need has always been a nightmare. secondBrain makes searching my digital library super intuitive, and saves me a ton of time every week"'
  },
  {
    icon: "/assets/stories/3.png",
    label: "Siddhant Mayecha",
    email: 'Lead, Growth Strategy @AWS',
    content: '"As a founder - I constantly come across and save useful information, tutorials and competitor research from across the web for future use. However, going back in time to find this information when I need has always been a nightmare. secondBrain makes searching my digital library super intuitive, and saves me a ton of time every week"'
  },
]
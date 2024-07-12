import Card from "./card";

const GetStarted = () => {
  return (
    <div className="mx-6 md:mx-[55px] my-[60px] flex flex-col items-center">
      <p className="text-[38px] font-bold tracking-tight">Get started in under 5 minutes!</p>
      <p className="font-Mulish text-[21px] mt-5">A simple, one time setup helps you reclaim hours every week!</p>
      <div className="flex flex-wrap gap-5 mt-[50px]">
        {Cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
    </div>
  )
}

export default GetStarted;

const Cards = [
  {
    icon: "/assets/getstarted/1.png",
    label: "Install our Extension"
  },
  {
    icon: "/assets/getstarted/2.png",
    label: "Import your Bookmarks"
  },
  {
    icon: "/assets/getstarted/3.png",
    label: "Organise information the way you want to."
  },
  {
    icon: "/assets/getstarted/4.png",
    label: "Access & chat with your knowledge instantly!"
  },
]
import Card from "./card";

const Build = () => {
  return (
    <div className="flex flex-row mx-6 w-full my-[60px]">
      <div className="flex flex-col w-1/2">
        <p className="text-[38px] font-bold tracking-tight">Build a Second Brain that <br/> grows with you</p>
        <p className="font-Mulish text-[21px] mt-5">A simple, one time setup helps you reclaim hours every<br/> week!</p>
        <div className="grid grid-cols-2 gap-5 mt-[50px] w-full">
          {Cards.map((card, index) => (
            <Card data={card} key={index} />
          ))}
        </div>
      </div>
      <div className="flex w-1/2">
      </div>
    </div>
  )
}

export default Build;

const Cards = [
  {
    icon: "/assets/build/1.png",
    label: "Browser Bookmarks"
  },
  {
    icon: "/assets/build/2.png",
    label: "Twitter Posts"
  },
  {
    icon: "/assets/build/3.png",
    label: "Podcasts & YT Videos"
  },
  {
    icon: "/assets/build/4.png",
    label: "Access Knowledge instantly!"
  },
]
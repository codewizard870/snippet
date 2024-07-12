interface Props {
  data: {
    icon: string;
    label: string;
    title: string;
  };
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full md:w-[370px] flex flex-col justify-center items-center p-4 md:p-7 bg-white rounded-2xl">
      <div className="flex flex-col items-center gap-4 text-center md:gap-8 justify-content">
        <img src={data.icon} className="w-16 h-16 md:w-20 md:h-20" alt="" />
        <p className="text-lg font-semibold md:text-2xl">{data.title}</p>
        <p className="text-xs md:text-base">{data.label}</p>
      </div>
      <div className="flex flex-wrap pt-8 md:pt-14">
        <button className="flex items-center">
          <p className="text-xs font-semibold md:text-base text-primary-default">Learn More</p>
          <img src="/assets/perks/ArrowRight.png" className="w-5 pl-2 md:w-7" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;

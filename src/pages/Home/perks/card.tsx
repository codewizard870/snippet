interface Props {
  data: {
    icon: string;
    label: string;
    title: string;
  }
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-[370px] flex flex-col justify-center items-center p-7 bg-white rounded-2xl">
      <div className="flex flex-col justify-content items-center gap-8 text-center">
        <img src={data.icon} className="w-20 h-20" alt="" />
        <p className="text-2xl font-semibold">{data.title}</p>
        <p>{data.label}</p>
      </div>
      <div className="flex flex-wrap pt-14">
        <button className="flex flex-row">
          <p className="text-[#00947a]">Learn More</p>
          <img src="/assets/perks/ArrowRight.png" className="pl-2" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
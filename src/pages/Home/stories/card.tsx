interface Props {
  data: {
    icon: string;
    label: string;
    email: string;
    content: string;
  }
}

const Card: React.FC<Props> = ({data}) => {
  return (
    <div className="lg:max-w-[370px] flex flex-col items-center justify-center w-full p-4 bg-white md:p-7 rounded-2xl">
      <div className="flex flex-col items-center text-center justify-content">
        <img src={data.icon} className="w-10 h-10 md:w-14 md:h-14" alt="" />
        <p className="pb-2 text-base font-semibold md:text-xl">{data.label}</p>
        <p className="pb-4 text-sm md:pb-8 md:text-base">{data.email}</p>
        <p className="text-sm md:text-base">{data.content}</p>
      </div>
    </div>
  );
};

export default Card;
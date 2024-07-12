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
    <div className="w-[370px] flex flex-col justify-center items-center py-7 px-7 bg-white rounded-2xl">
      <div className="flex flex-col justify-content items-center text-center">
        <img src={data.icon} className="w-14 h-14" alt="" />
        <p className="text-xl font-semibold pb-2">{data.label}</p>
        <p className="pb-8">{data.email}</p>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default Card;
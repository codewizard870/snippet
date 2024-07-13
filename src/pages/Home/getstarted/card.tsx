interface Props {
  data: {
    icon: string;
    label: string;
  }
}
const Card:React.FC<Props> = ({data}) => {
  return (
    <div className="lg:max-w-[575px] flex items-center w-full gap-3 p-3 bg-white rounded-lg md:p-5">
      <img src={data.icon} className="w-10 md:w-[50px]" />
      <p className="text-sm md:text-lg font-Mulish">{data.label}</p>
    </div>
  )
}

export default Card;
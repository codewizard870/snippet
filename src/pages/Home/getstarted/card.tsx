interface Props {
  data: {
    icon: string;
    label: string;
  }
}
const Card:React.FC<Props> = ({data}) => {
  return (
    <div className="w-full md:w-[575px] p-3 md:p-5 flex items-center gap-3 bg-white rounded-lg">
      <img src={data.icon} className="w-10 md:w-[50px]" />
      <p className="text-sm md:text-lg font-Mulish">{data.label}</p>
    </div>
  )
}

export default Card;
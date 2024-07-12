interface Props {
  data: {
    icon: string;
    label: string;
  }
}
const Card:React.FC<Props> = ({data}) => {
  return (
    <div className="w-full p-5 flex items-center gap-3 bg-white rounded-lg">
      <img src={data.icon} className="" />
      <p className="text-base md:text-lg font-Mulish">{data.label}</p>
    </div>
  )
}

export default Card;
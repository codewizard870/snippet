interface Props {
  data: {
    title: string;
    label: string;
    icon: string;
  };
}
const Resume: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-[255px]">
      <img src={data.icon} className="rounded-lg w-7 md:w-10" />
      <p className="font-Roboto font-medium text-sm md:text-base mt-[14px] whitespace-nowrap">
        {data.title}
      </p>
      <p className="text-[10px] md:text-xs font-Roboto text-[#5D6970] mt-[14px]">
        {data.label}
      </p>
    </div>
  );
};

export default Resume;

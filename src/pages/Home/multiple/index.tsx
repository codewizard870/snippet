import Resume from "./resume";

const Multiple = () => {
  return (
    <div className="pt-[60px] md:pt-[100px] pb-[100px] md:pb-[158px] mx-6 md:mx-[118px] flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
      <div>
        <p className="text-3xl font-medium leading-normal md:text-4xl font-Roboto">
          Source and manage candidates
          <br /> across multiple job boards!
        </p>
        <p className="mt-6 text-sm md:text-base font-Roboto text-[#6F7CB2]">
          Aggregate, compare, filter and shortlist candidates sourced from
          across
          <br /> multiple job boards - including LinkedIn, AngelList, Indeed and
          <br /> Naukri.com.{" "}
        </p>
        <div className="mt-10 md:mt-[122px] flex flex-col md:flex-row gap-[30px]">
          {Resumes.map((resume, index) => (
            <Resume data={resume} key={index} />
          ))}
        </div>
      </div>
      <div>
        <img src="/assets/multiple/banner.png" className="w-full md:w-[400px] rounded-lg" />
      </div>
    </div>
  );
};

export default Multiple;

const Resumes = [
  {
    title: "Bulk Download Resumes",
    label:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
    icon: "/assets/multiple/1.png",
  },
  {
    title: "Consolidate Candidate Management",
    label:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
    icon: "/assets/multiple/2.png",
  },
];

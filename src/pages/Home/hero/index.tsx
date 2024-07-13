import JoinButton from "../../../components/joinButton";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center mt-[100px] md:mt-[226px] mx-6 md:mx-[55px] mb-[120px]">
      <div className="lg:w-[670px]">
        <p className="text-3xl font-bold !leading-normal md:text-[44px]">
          Turn Your Bookmarks into a Searchable Knowledge Base.
        </p>
        <p className="pt-5 text-[base] !leading-relaxed md:text-xl">
          Access and chat with your favourite content, instantly. Supercharge
          your productivity with an AI powered Second Brain.
        </p>
        <div className="mt-10">
          <JoinButton />
        </div>
      </div>
      <div className="rounded-[20px] ">
        <img src="/assets/hero/banner.png" className="min-w-[300px]"/>
      </div>
    </div>
  );
};

export default Hero;

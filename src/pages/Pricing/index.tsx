const Pricing = () => {
  return (
    <div className="pt-24 md:pt-[180px] pb-24 md:pb-[158px] mx-6 md:mx-[118px] flex flex-col items-center">
      <p className="text-2xl md:text-[38px] font-bold leading-normal font-Roboto">
        Pick Your Perfect Plan
      </p>
      <p className="mt-5 text-sm md:text-base font-Mulish">
        Find the perfect plan for your business with our flexible pricing
        options.
      </p>
      <div className="flex flex-col justify-center w-full gap-10 pt-10 md:flex-row">
        <div className="px-4 md:px-7 py-10 md:py-16 rounded-[30px] w-full md:w-[370px] bg-white">
          <p className="text-base md:text-[21px] font-Mulish">Free</p>
          <p className="pt-6 text-4xl font-bold md:text-[50px]">
            $0 <span className="text-sm md:text-base">/month</span>
          </p>
          <p className="pt-6 text-sm md:text-base font-Mulish">
            For people that are testing our Product{" "}
          </p>
          <div className="flex flex-col gap-4 mt-6">
            {FreeFeatures.map((feature, index) => (
              <div className="flex gap-2" key={index}>
                <img src="/assets/pricing/check.svg" className="w-4" />
                <p className="text-sm font-bold md:text-base font-Mulish">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <button className="w-full px-6 py-[18px] mt-10 text-md text-primary-default rounded-full md:text-base font-semibold bg-[#E5F4F2] hover:bg-[#E5F4F2]/70">
            Get Started
          </button>
        </div>
        <div className="px-4 md:px-7 py-10 md:py-16 rounded-[30px] w-full md:w-[370px] bg-white">
          <p className="text-base md:text-[21px] font-Mulish">Starter</p>
          <p className="pt-6 text-4xl font-bold md:text-[50px]">
            $19 <span className="text-sm md:text-base">/month</span>
          </p>
          <p className="pt-6 text-sm md:text-base font-Mulish">
            For Students and Casual Users
          </p>
          <div className="flex flex-col gap-4 mt-6">
            {StarterFeatures.map((feature, index) => (
              <div className="flex gap-2" key={index}>
                <img src="/assets/pricing/check.svg" className="w-4" />
                <p className="text-sm font-bold md:text-base font-Mulish">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <button className="w-full px-6 py-[18px] mt-10 text-md text-primary-default rounded-full md:text-base font-semibold bg-[#E5F4F2] hover:bg-[#E5F4F2]/70">
            Get Started
          </button>
        </div>
        <div className="px-4 md:px-7 py-10 md:py-16 rounded-[30px] w-full md:w-[370px] bg-primary-default text-white">
          <p className="text-base md:text-[21px] font-Mulish">Professional</p>
          <p className="pt-6 text-4xl font-bold md:text-[50px]">
            $49 <span className="text-sm md:text-base">/month</span>
          </p>
          <p className="pt-6 text-sm md:text-base font-Mulish">
            For Professionals & Heavy Duty Users
          </p>
          <div className="flex flex-col gap-4 mt-6">
            {StarterFeatures.map((feature, index) => (
              <div className="flex gap-2" key={index}>
                <img src="/assets/pricing/check_white.svg" className="w-4" />
                <p className="text-sm font-bold md:text-base font-Mulish">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <button className="w-full px-6 py-[18px] mt-10 text-md text-primary-default rounded-full md:text-base font-semibold bg-white hover:bg-white/70">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const FreeFeatures = [
  "5 Bookmarked Web Pages",
  "10 Queries per Day",
  "Write feature details here",
];

const StarterFeatures = [
  "Write feature details here",
  "Write feature details here",
  "Write feature details here",
];

const ProfessionalFeatures = [
  "Write feature details here",
  "Write feature details here",
  "Write feature details here",
];

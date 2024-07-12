const Pricing = () => {
  return (
    <div className="pt-24 md:pt-[180px] pb-24 md:pb-[158px] mx-6 md:mx-[118px] flex flex-col items-center">
      <p className="text-3xl font-medium leading-normal md:text-4xl font-Roboto">
        Pricing
      </p>
      <div className="flex flex-col justify-center w-full gap-10 pt-10 md:flex-row md:w-auto">
        <div className="p-6 border rounded-[30px] border-gray-1/50">
          <p className="text-base md:text-lg text-gray-1/50">Regular</p>
          <p className="pt-6 text-4xl font-semibold md:text-5xl">$15</p>
          <p className="pt-6 text-base md:text-lg text-gray-1/50">Per Month</p>
          <div className="w-full h-px my-4 bg-gray-1/50" />
          <div className="flex flex-col gap-4">
            {RegularFeatures.map((feature, index) => (
              <div className="flex gap-2" key={index}>
                <img src="/assets/pricing/check.svg" className="w-4" />
                <p className="text-xs md:text-sm text-gray-1/50">{feature}</p>
              </div>
            ))}
          </div>
          <button className="w-full px-6 py-2 mt-10 text-lg text-white rounded-full md:text-xl bg-primary-default hover:bg-primary-default/70">
            Get Started
          </button>
        </div>
        <div className="p-6 border rounded-[30px] border-gray-1/50">
          <p className="text-base md:text-lg text-gray-1/50">Pro</p>
          <p className="pt-6 text-4xl font-semibold md:text-5xl">$50</p>
          <p className="pt-6 text-base md:text-lg text-gray-1/50">Per Month</p>
          <div className="w-full h-px my-4 bg-gray-1/50" />
          <div className="flex flex-col gap-4">
            {RegularFeatures.map((feature, index) => (
              <div className="flex gap-2" key={index}>
                <img src="/assets/pricing/check.svg" className="w-4" />
                <p className="text-xs md:text-sm text-gray-1/50">{feature}</p>
              </div>
            ))}
          </div>
          <button className="w-full px-6 py-2 mt-10 text-lg text-white rounded-full md:text-xl bg-primary-default hover:bg-primary-default/70">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const RegularFeatures = [
  "Article and video capture",
  "AI-powered summaries",
  "Daily/weekly email recaps",
  "Browser Extension",
  "Personal search engine",
  "Knowlege Import",
];

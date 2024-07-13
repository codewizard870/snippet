import Hero from "./hero";
import Client from "./client";
import GetStarted from "./getstarted";
import HowItWorks from "./howit";
import Build from "./build";
import Work from "./work";
import Flexible from "./flexible";
import Perks from "./perks";
import Stories from "./stories";

function Home() {
  return (

    <div className="flex justify-center w-full">
      <div className="w-full lg:max-w-[1280px]">
        <Hero />
        <Client />
        <GetStarted />
        <Stories />
        <Build />
        <Work />
        <Flexible />
        <HowItWorks />
        <Perks />
      </div>
    </div>
  );
}

export default Home;

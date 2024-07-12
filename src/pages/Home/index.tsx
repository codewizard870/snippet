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
      <div className="w-full md:w-[1280px]">
        <Hero />
        <Client />
        <GetStarted />
        <HowItWorks />
        <Build />
        <Work />
        <Flexible />
        <Perks />
        <Stories />
      </div>
    </div>
  );
}

export default Home;

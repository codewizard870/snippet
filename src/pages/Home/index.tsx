import Hero from "./hero";
import Client from "./client";
import GetStarted from "./getstarted";
import HowItWorks from "./howit";

function Home() {
  return (

      <div className="flex justify-center w-full">
        <div className="w-full md:w-[1280px]">
          <Hero />
          <Client />
          <GetStarted />
          <HowItWorks />
        </div>
      </div>
  );
}

export default Home;

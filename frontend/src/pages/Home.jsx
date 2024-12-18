

// import SliderGPT from "../components/carousel/SliderGPT";

import Description from "../components/home/Description";
import FabricationComponent from "../components/home/FabricationComponent";
import FastenerComponent from "../components/home/FastenerComponent";
import FastnersLinks from "../components/home/FastnersLinks";
// import SwiperComponent from "../components/home/SwiperComponent";
import WelcomeSection from "../components/home/WelcomeSection";
import {Slider} from "../utils/Slider"


// Slider Component 

const Home = () => {
  return (
    <>
      {/* <h1 className="p-10 text-center">This is Home Page </h1> */}
      <div>
        <Slider/>
        {/* <SwiperComponent /> */}
        <WelcomeSection />
        <FastenerComponent />
        <FabricationComponent />
        <Description />
        <FastnersLinks />
      </div>
    </>
  );
};

export default Home;

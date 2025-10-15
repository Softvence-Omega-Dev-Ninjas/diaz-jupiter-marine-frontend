import React from "react";
import { BsStars } from "react-icons/bs";
import SearchComponent from "./SearchComponent";
import CustomContainer from "@/components/CustomComponents/CustomContainer";

const Banner = () => {
  return (
    <section className="relative h-[380px] md:min-h-screen w-full flex items-center justify-center overflow-hidden rounded-2xl  md:py-10">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-[380px] md:h-full object-cover rounded-2xl"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg-video/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 px-3 md:px-0">
        <CustomContainer>
          <div className="flex flex-col items-start justify-between  gap-5 h-full space-y-5">
            <div className="text-white space-y-3 md:space-y-[17%] pt-[20%] md:pt-[5%]">
              <h1 className="text-2xl md:text-6xl lg:text-[115px] font-bold text-left uppercase tracking-[1px] md:tracking-[5px]">
                Florida yacht trader
              </h1>
              <div className="text-xs md:text-xl max-w-[520px] pr-5 space-y-2">
                <h2 className="flex items-center gap-2 font-semibold">
                  <BsStars /> <span>AI Powered</span>
                </h2>
                <p>
                  The Worlds most affordable and safe marketplace with AI
                  powered search assistant
                </p>
              </div>
            </div>
            <div className="md:mt-5 w-full ">
              <SearchComponent />
            </div>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import BannerName from "../BannerName/BannerName";
import bannerImg from "../imgs/banner2.png";
function MainBanner() {
  return (
    <div className="bg-gradient-to-b mt-14 from-light-grey py-20 ">
      <div className=" relative  h-40  flex items-center justify-between container mx-auto md:px-40 bg-green ">
        <BannerName name={"Jeremy"} discount={"20"} more={"#"} />
        <div className="ml-4">
          <img
            className="absolute hidden sm:block  lg:right-20 right-5 bottom-[-30px]  "
            width="200"
            src={bannerImg}
            alt="Tooth brush and a paste laying on top of a green leaf"
          />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;

import React from "react";
import ButtonLink from "../Button/ButtonLink";
import img1 from "../imgs/banner.png";

function SaleBanner() {
  return (
    <div className=" relative  container  mx-auto">
      <div className="banner w-full mt-5 mb-20 flex justify-evenly shadow-xl overflow-hidden ">
        <div className=" w-full absolute left-[5%] top-[-10%]">
          <img className="w-[250px] hidden sm:block" src={img1} alt="" />
        </div>

        <div className=" text-center h-52 sm:pl-[40%] md:pt-12 ">
          <span className="text-light text-2xl"> Sales up to </span>
          <h3 className="text-5xl font-krona text-yellow md:inline-block ">
            50% Off
          </h3>
          <p className="text-light md:inline-block text-xl py-2 px-0">
            offer ends after 5 days
          </p>
          <br />
          <ButtonLink className="	" path="/" text="see more" />
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;

import React from "react";
import ButtonLink from "../Button/ButtonLink";
import bannerImg from "../imgs/banner2.png";
function Banner() {
  return (
    <div
      style={{
        position: "relative",
        bottom: "-100px",
      }}
      className=" container flex items-center justify-between mx-auto md:px-40 pl-10 bg-green w-full"
    >
      <div>
        <h3 className="font-krona md:text-2xl font-semibold mb-4 text-white ">
          Be natural, <br /> be smart, <br /> be you
        </h3>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="ml-4">
        <img
          className="py-8"
          width="200"
          src={bannerImg}
          alt="Tooth brush and a paste laying on top of a green leaf"
        />
      </div>
    </div>
  );
}

export default Banner;

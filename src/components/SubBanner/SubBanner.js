import React from "react";

import { subMenuList } from "../constants/subMenuList";

import { Link } from "react-router-dom";

function SubBanner() {
  return (
    <section className="grid mx-auto  grid-flow-row grid-cols-2 md:grid-cols-3 px-auto lg:grid-cols-6 container   mt-10 ">
      {subMenuList.map((slide, index) => {
        return (
          <div
            key={index}
            className=" flex flex-col   align-center hover:bg-black  bg-light rounded-sm mb-6 mr-5 px-4 py-4 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out "
          >
            {
              <Link to="/search" className=" capitalize text-center ">
                <div className=" flex flex-1 flex-col justify-center  ">
                  <img
                    className="w-25 h-28  hover:invert object-contain "
                    src={slide.img}
                    alt=""
                  />
                </div>

                <h3 className="text-sm font-medium hover:text-white ">
                  {slide.desc}
                </h3>
              </Link>
            }
          </div>
        );
      })}
    </section>
  );
}

export default SubBanner;

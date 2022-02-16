import React, { useEffect } from "react";

import { sliderInfo } from "../constants/slideInfo";
import ButtonLink from "../Button/ButtonLink";
import SectionTitle from "../SectionTitle/SectionTitle";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from "react";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [current]);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="bg-light mt-24   ">
      {sliderInfo.map((slide, index) => {
        return (
          <div className=" h-100px container mx-auto ">
            {index === current && (
              <div
                className=" flex relative "
                style={{
                  minHeight: "calc(100vh - 70px)",
                }}
              >
                <div className="md:w-1/2 w-full  h-full top-0 left-0 md:h-auto absolute xl:relative md:bg-light-grey  bg-[rgba(255,255,255,.8)] py-5 flex flex-col flex-wrap  px-[7%] justify-center items-center md:items-start">
                  <img
                    className="h-64  w-̉̉64 mb-5  animate-fadeUp md:hidden inline-block"
                    src={slide.img}
                    alt=""
                  />
                  <SectionTitle
                    classes="text-yellow lg:mb-2   font-light animate-fadeUpMedium   block uppercase tracking-widest pb-[5px]"
                    text={slide.title}
                  ></SectionTitle>
                  <h3 className="lg:text-5xl text-center md:text-3xl text-2x1 animate-fadeUpSlow leading-normal text-black font-krona uppercase">
                    {slide.desc}
                  </h3>

                  <ButtonLink
                    path="/about"
                    text="see more"
                    isMain
                    className="inline-block  animate-fadeUpHard mt-5 border-2 rounded-full !bg-white border-black py-[8px] sm:py-2 px-[15px] sm:px-8 text-sm md:text-lg cursor-pointer text-black hover:text-white hover:!bg-yellow"
                  />

                  <div className="md:absolute  mt-3 pt-5 flex bottom-[40%]  right-[-55px] md:right-[-65px] ">
                    <HiChevronLeft
                      onClick={prevSlide}
                      className="md:h-12 m-2 rounded-l-full md:w-12 h-10 w-10 leading-10 text-center text-3xl  bg-white text-black mx-2 my-0 shadow-md cursor-pointer hover:bg-yellow hover:text-white hover:scale-110 transition delay-50 duration-300 ease-in-out"
                    />
                    <HiChevronRight
                      onClick={nextSlide}
                      className="md:h-12 m-2 rounded-r-full md:w-12 h-10 w-10 leading-10 text-center text-3xl bg-white text-black mx-2 my-0 shadow-md cursor-pointer hover:bg-yellow hover:text-white hover:scale-110 transition delay-50 duration-300 ease-in-out "
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full transition ">
                  <img
                    className="h-full w-full  object-cover "
                    src={slide.subImg}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Slider;

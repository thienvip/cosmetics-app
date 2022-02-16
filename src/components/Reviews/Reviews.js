import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { reviews } from "../constants/reviews";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/virtual";

function Reviews() {
  return (
    <div>
      <div className="relative my-20  mx-auto">
        <div className="absolute bg-yellow h-14 left-1/2 rounded-full top-0  w-14 -z-1"></div>
        <h1 className="font-krona text-3xl text-center">Clients say</h1>
      </div>
      <Swiper
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        loop
        modules={[Virtual]}
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        className="container   mx-auto "
      >
        {reviews.map((slide, index) => {
          return (
            <SwiperSlide className=" container mt-5 slide mb-5  ">
              {
                <div className=" p-2 ">
                  <div className="flex   ">
                    <img
                      className="h-16 w-16 mr-2 rounded-full"
                      src={slide.img}
                      alt=""
                    />
                    <div className=" mt-2">
                      <h3 className="text-xl font-krona capitalize text-[#222]   ">
                        {slide.name}
                      </h3>
                      <div className="text-base text-yellow">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                      </div>
                    </div>
                  </div>
                  <p className="p-5 bg-[#f5f5f5] text rounded-md text-[#777] relative mt-5  text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt numquam quis quos ad ab eos obcaecati minima, quas
                    placeat rerum blanditiis labore dignissimos pariatur,
                    tempore praesentium quisquam suscipit, ipsa necessitatibus!
                  </p>
                </div>
              }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Reviews;

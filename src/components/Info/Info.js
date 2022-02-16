import React from "react";

function Info({ image, title, info, link, background, color }) {
  return (
    <div
      className="flex w-full  md:w-[49%] gap-5 flex-col justify-center items-center pb-3 relative"
      style={{
        color,
        background,
      }}
    >
      <img src={image} alt="" className="object-cover max-w-full h-auto" />
      <div className="py-8 px-16 text-center flex-col gap-5">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <h6 className="text-lg font-semibold ">{info}</h6>
        <div
          style={{ color }}
          className="hover:underline underline-offset-2 mt-5"
        >
          {link}
        </div>
      </div>
    </div>
  );
}

export default Info;

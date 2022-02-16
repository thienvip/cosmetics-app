import React from "react";

function Featured({
  title,
  info,
  link,

  image,
  order,
  background,
  color,
  className,
}) {
  return (
    <div
      className="flex md:gap-10 flex-wrap items-center justify-center p-8 px-5  gap-5 md:px-16 mb-8 "
      style={{ background }}
    >
      <div
        className="text-center flex flex-col gap-5  max-w-xs md:max-w-md"
        style={{ order, color }}
      >
        <h1 className="font-extrabold  text-5xl leading-snug">{title}</h1>
        <h4 className="text-xl font-semibold">{info}</h4>
        <div className="cursor-pointer hover:underline underline-offset-2">
          {link}
        </div>
      </div>
      <div className=" object-contain w-[600px]">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Featured;

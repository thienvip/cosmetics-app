import React from "react";
import ButtonLink from "../Button/ButtonLink";
import "./Poster.css";
function Poster() {
  return (
    <div className="poster    my-5">
      <div className=" w-[550px] container  bg-light m-8 py-5  ">
        <span className="text-yellow text-3xl px-5 ">Why Choose Us?</span>

        <h3 className="pt-2 text-3xl text-black font-krona px-5 font-medium">
          Makeup makes difference
        </h3>
        <p className="text-base  text-black py-2 px-5 leading-8">
          Makeup is the message from your heart to the hearts of others that
          says, ‘Care about me. Care about my day. Care about my feelings. Care
          about my body. Care about me.
        </p>
        <ButtonLink
          path="/about"
          text="see more"
          isMain
          className="inline-block m-5  border-2  !bg-white border-black py-2 px-8 !text-lg cursor-pointer text-black hover:text-white hover:!bg-yellow"
        />
      </div>
    </div>
  );
}

export default Poster;

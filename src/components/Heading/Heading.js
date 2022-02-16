import React from "react";

function Heading({ heading }) {
  return (
    <h1 className="text-3xl md:text-5xl text-center my-14 uppercase text-[#1e3932]  font-extrabold  ">
      {heading}
    </h1>
  );
}

export default Heading;

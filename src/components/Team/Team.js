import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import { teams } from "../constants/teams.js";

function Team() {
  return (
    <section className="container mx-auto my-10">
      <div className="flex items-center ">
        <div className="relative my-20  mx-auto">
          <div className="absolute bg-yellow h-14 rounded-full top-0  w-14 -z-1"></div>
          <h1 className="font-krona text-2xl text-center">Our Team</h1>
        </div>
      </div>
      <div className=" items-center grid grid-cols-1 md:grid-cols-3   justify-center ">
        {teams.map(({ img, job, name }) => (
          <div className="border-2 group text-center box overflow-hidden border-black   mx-auto md:w-[98%] w-2/3 m-2 relative ">
            <div className="overflow-hidden ">
              <div className="group-hover:scale-110 transition duration-300 ease-in-out">
                <img
                  src={img}
                  alt=""
                  className="   h-full w-full object-cover"
                />
              </div>
              <div className="absolute transform delay-75 duration-300 transition ease-in-out group-hover:translate-x-0  flex gap-5  link sm:translate-x-full w-full     items-center justify-center h-full  bg-category  top-0 left-0">
                <Facebook className="  h-14 w-14  scale-150 hover:text-black hover:bg-white   border-[1px] border-white text-white " />
                <Instagram className=" h-14 w-14 scale-150 hover:text-black hover:bg-white my-5  border-[1px] border-white text-white " />
                <Twitter className=" h-14 w-14   scale-150 hover:text-black hover:bg-white border-[1px] border-white text-white " />
              </div>
            </div>
            <div className=" border-t-2 p-2   border-black">
              <h3 className="font-krona   text-lg uppercase ">{name}</h3>
              <p className="text-yellow  text-lg capitalize ">{job}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;

import React from "react";
import img1 from "../imgs/ad_05.png";
import img2 from "../imgs/ad_06.png";
import img3 from "../imgs/ad_07.png";
import img4 from "../imgs/ad_08.png";

function SubPoster() {
  return (
    <section className="relative gap-0 grid grid-col-1  sm:grid-cols-2  md:grid-cols-3 md:grid-rows-3 my-10">
      <div className="w-full overflow-hidden ">
        <div className="w-full h-full transform transition duration-700 ease-in-out hover:scale-110  ">
          <img src={img1} alt=""></img>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-light h-52 sm:h-auto   ">
        <div className="w-full h-full pl-12 md:pl-5 lg:pl-12 flex group flex-wrap hover:bg-ads flex-col transform  justify-center transition duration-500 ease-in-out">
          <h3 className="text-2xl lg:text-3xl group-hover:animate-SlideOut group-hover:text-white translate-x-0 text-slate-700 ">
            WOMAN’S
          </h3>
          <h2 className="text-4xl lg:text-5xl group-hover:animate-SlideIn text-yellow">
            LIVE STYLE
          </h2>
          <h3 className="text-2xl lg:text-3xl group-hover:animate-SlideOut group-hover:text-white translate-x-0 text-slate-700 ">
            DANLIEN POLOSA
          </h3>
        </div>
      </div>
      <div className="w-full overflow-hidden   md:col-start-3 md:row-span-2">
        <div className="w-full h-full transform  duration-700 ease-in-out hover:scale-110 ">
          <img src={img4} alt=""></img>
        </div>
      </div>
      <div className="w-full   overflow-hidden h-52 sm:h-auto">
        <div className="w-full h-full pl-12 md:pl-5 lg:pl-12 flex group flex-wrap hover:bg-ads flex-col transform  justify-center transition duration-500 ease-in-out">
          <h3 className="text-2xl lg:text-3xl group-hover:animate-SlideOut group-hover:text-white translate-x-0 text-slate-700 ">
            SUNNY’S
          </h3>
          <h2 className="text-4xl lg:text-5xl group-hover:animate-SlideIn text-yellow">
            COLLECTION
          </h2>
          <h3 className="text-2xl lg:text-3xl group-hover:animate-SlideOut group-hover:text-white translate-x-0 text-slate-700 ">
            GENTLE & ELEGANT
          </h3>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="w-full h-full transform  duration-500 ease-in-out hover:scale-110  ">
          <img src={img2} alt=""></img>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="w-full h-full transform  duration-500 ease-in-out hover:scale-110  ">
          <img src={img3} alt=""></img>
        </div>
      </div>
      <div className="w-full overflow-hidden  bg-light h-52 sm:h-auto">
        <div className="w-full h-full pl-12 md:pl-5 lg:pl-12 flex group flex-wrap hover:bg-ads flex-col transform  justify-center transition duration-500 ease-in-out">
          <h3 className="text-2xl lg:text-3xl group-hover:animate-SlideOut group-hover:text-white translate-x-0 text-slate-700 ">
            LIPSTICK
          </h3>
          <h2 className="text-4xl lg:text-5xl group-hover:animate-SlideIn text-yellow">
            HUNGPO
          </h2>
          <h3 className="text-2xl lg:text-3xl group-hover:animate-SlideOut group-hover:text-white translate-x-0 text-slate-700 ">
            JOIN CENA
          </h3>
        </div>
      </div>
      <div className="w-full overflow-hidden h-52 sm:h-auto col-start-1 row-start-3 md:col-start-3 md:row-start-3">
        <div className="w-full h-full pl-12 md:pl-5 lg:pl-12 flex group flex-wrap bg-ads hover:bg-white flex-col transform  justify-center transition duration-500 ease-in-out">
          <h3 className="text-2xl lg:text-3xl group-hover:animate-SlideOut group-hover:text-dark text-white translate-x-0  ">
            COLLECTION
          </h3>
          <h2 className="text-4xl lg:text-5xl group-hover:animate-SlideIn text-yellow">
            ACESSESORY
          </h2>
          <h3 className="text-2xl lg:text-3xl group-hover:animate-SlideOut group-hover:text-dark text-white translate-x-0  ">
            FOR BESTIE
          </h3>
        </div>
      </div>
    </section>
  );
}

export default SubPoster;

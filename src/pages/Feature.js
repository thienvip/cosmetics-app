import React from "react";
import Featured from "../components/Feautured/Featured";
import Info from "../components/Info/Info";
import Heading from "../components/Heading/Heading";
import img1 from "../components/imgs/img-1.jpg";
import img2 from "../components/imgs/img-2.jpg";
import img3 from "../components/imgs/img-3.jpg";
import img4 from "../components/imgs/featured-1.jpg";
import img5 from "../components/imgs/featured-2.webp";
import img6 from "../components/imgs/featured-3.jpg";
import img7 from "../components/imgs/featured-4.jpg";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer.js/Footer";
import Navbar from "../components/Navbar/Navbar";

function Feature() {
  return (
    <div className="">
      <Navbar />
      <Fade>
        <div className="bg-[[#f3d9c3] md:mt-0 mt-24 text-center p-8 mb-5">
          <h4 className="text-[#1e3932] font-semibold sm:max-w-md text-lg md:max-w-2xl mx-auto leading-relaxed">
            We’re working hard to put the health and well-being of our partners
            and customers first in all that we do.
          </h4>
        </div>
      </Fade>
      <Fade>
        <div className="py-8 p-8 flex flex-wrap gap-16 items-center justify-center bg-[#f3d9c3]">
          <div className="text-center items-center flex flex-col gap-8">
            <h4 className="text-[#1e3932] text-2xl  ">
              Investing in our communities
            </h4>
            <p className="text-[#1e3932] font-semibold text-base sm:text-xl max-w-md">
              The Welly Foundation awarded grants to over 400 nonprofits serving
              communities of color. Recipients were nominated by Welly partners
              (employees).
            </p>
            <button className="inline-block font-bold hover:text-light border-solid border-black border-[1px] rounded-[50px]  max-w-[125px] px-4 py-2 leading-tight text-center transition duration-150 ease-in-out cursor-pointer bg-white text-black text-sm font-base hover:bg-slate-700">
              Learn more
            </button>
          </div>
          <div className="object-contain   grid-flow-row sm:grid-flow-col grid gap-5  max-w-2xl">
            <img src={img1} alt="" />
            <img src={img3} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>
      </Fade>
      <Fade>
        <Heading heading="TODAY IS YOURS" />
      </Fade>
      <div>
        <Fade>
          <Featured
            title="NICELY NONDAIRY"
            info="Say yes to sips of delight with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew."
            link="Explore the honey products"
            path="/search"
            image={img4}
            background="#f6ceab"
            color="#1e3932"
          />
        </Fade>
        <Fade>
          <Featured
            title="PISTACHIO"
            info="Practice makes perfect when it comes to putting on your makeup as well as blending products."
            link="Try the new pistachio foundation"
            path="/search"
            image={img5}
            order="2"
            background="#f2be92"
            color="#1e3932"
          />
        </Fade>
      </div>
      <Fade>
        <Heading heading="MORE TO DISCOVER" />
      </Fade>
      <Fade>
        <div className="flex gap-6 flex-col mb-10 md:mb-24 md:flex-row">
          <Info
            title="Order and pick up. Easy as that."
            image={img6}
            info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
            link="See pickup options"
            color="#1e3932"
            background="#cfac8c"
            path="/search"
          />
          <Info
            title="Keep your lipstick on all day."
            image={img7}
            info="Make everything a little brighter. Flaunt your cheekbones with blush and always put a cherry on top of your look."
            link="Order now"
            color="#1e3932"
            path="/search"
            background="#dbbea0"
          />
        </div>
      </Fade>
      <Fade>
        <Footer />
      </Fade>
    </div>
  );
}

export default Feature;

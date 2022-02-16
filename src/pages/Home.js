import React from "react";

import Benefits from "../components/Benefits/Benefits";
import OurBest from "../components/OurBest/OurBest";
import { sliderInfo } from "../components/constants/slideInfo";
import Slider from "../components/Slider/Slider";
import SubBanner from "../components/SubBanner/SubBanner";
import UniqueSellingPoint from "../components/UniqueSellingPoint/UniqueSellingPoint";
import Poster from "../components/Poster/Poster";
import Reviews from "../components/Reviews/Reviews";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer.js/Footer";
import SubPoster from "../components/SubPoster/SubPoster";
import Banner from "../components/Banner/Banner";
import TopProducts from "../components/OurBest/TopProducts";
function Home() {
  return (
    <div>
      <Navbar />

      <Slider slides={sliderInfo} />

      <SubBanner />

      <Poster />

      <OurBest />
      <SubPoster />
      <TopProducts />
      <Banner />
      <UniqueSellingPoint />

      <Reviews />
      <Benefits />
      <Footer />
    </div>
  );
}

export default Home;

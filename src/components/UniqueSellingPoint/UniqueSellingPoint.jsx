import React from "react";

import bannerImg from "../imgs/banner3.jpg";

const UniqueSellingPoint = () => (
  <div className="bg-light-grey pt-20 mb-20">
    <div className="container mx-auto pt-20 pb-16 flex flex-col md:flex-row items-center">
      <div className="mr-0 md:mr-4 mb-4 md:mb-0">
        <img
          src={bannerImg}
          alt="Tooth brush and a paste laying on top of a green leaf"
        />
      </div>
      <div>
        <h2 className="font-krona text-3xl mb-4">
          The best part of beauty is that which no picture can express.
        </h2>
        <p className="text-lg mb-2">
          Life is full of beauty. Notice it. Notice the bumble bee, the small
          child, and the smiling faces.
        </p>
        <p className="text-lg">
          Smell the rain, and feel the wind. Live your life to the fullest
          potential, and fight for your dreams.
        </p>
      </div>
    </div>
  </div>
);

export default UniqueSellingPoint;

import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";

function FindAStore() {
  return (
    <div className="flex font-base text-sm font-semibold items-center gap-1 opacity-[0.87] mr-5  ">
      <LocationOnIcon className="hover:text-yellow transition  duration-150 ease-in-out" />
      <h5 className="hover:text-yellow transition  duration-100 ease-in-out">
        Find a store
      </h5>
    </div>
  );
}

export default FindAStore;

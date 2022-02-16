import React from "react";

import Navbar from "../components/Navbar/Navbar";

import SubNav from "../components/SubNav/SubNav";

function Search({ data }) {
  return (
    <div className="">
      <Navbar />
      <SubNav data={data} />
    </div>
  );
}

export default Search;

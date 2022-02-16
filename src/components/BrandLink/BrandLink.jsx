import React from "react";
import { Link } from "react-router-dom";

const BrandLink = ({ className }) => (
  <Link className={`text-2xl   font-krona ${className}`} to="/">
    Welly
  </Link>
);

export default BrandLink;

import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ path, text, isMain, className }) => (
  <Link
    to={path}
    className={`inline-block rounded-full font-bold font-krona text-xs transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out ${
      isMain ? "bg-yellow py-4 px-10" : "bg-dark text-white py-2 px-4"
    } ${className}`}
  >
    {text}
  </Link>
);

export default ButtonLink;

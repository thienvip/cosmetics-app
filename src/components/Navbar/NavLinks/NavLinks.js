import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../constants/navLinks";
import "./NavLinks.css";
function NavLinks({ isMain }) {
  return (
    <div>
      {links.map((link, index) => (
        <NavLink
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? " underline   " : "",
              textDecorationColor: isActive ? " #ffc94b  " : "",
              textDecorationThickness: isActive ? "2px" : "",
              textUnderlineOffset: isActive ? "4px" : "",
            };
          }}
          to={link.path}
          className={
            isMain
              ? "   -tracking-tighter opacity-[0.87]  text-base mx-4 underline decoration-transparent text-black relative font-bold    uppercase     duration-150 ease-in-out"
              : "leading-loose transition duration-300 ease-in-out  hover:opacity-80 flex flex-col text-4xl text-black font-normal"
          }
          key={`${link.name}-${index}`}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;

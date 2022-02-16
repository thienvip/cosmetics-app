import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import LogoutButton from "../../Button/LogoutButton";
import SignInButton from "../../Button/SignInButton";
import SignUpButton from "../../Button/SignUpButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useUserAuth } from "../../../hooks/Context/UserAuthContext";
import FindAStore from "./FindAStore";

function MenuToggle() {
  const [showMiniNav, setShowMiniNav] = useState(false);
  const { user } = useUserAuth();
  return (
    <div className="absolute shadow-md  animate-fadeUpMedium bg-white top-[96px] right-0 w-[70vw] h-[100vw]   md:hidden">
      <div className="m-5 sm:p-10 border-category border-b-[1px]   w-[60vw] flex flex-col">
        <Link
          className="mb-7 hover:text-yellow transition duration-100 ease-in-out text-2xl font-semibold"
          to="/"
        >
          Home
        </Link>
        <div className="flex items-center gap-2  ">
          <Link
            className="mb-7 hover:text-yellow transition duration-100 ease-in-out text-2xl  font-semibold"
            to="/search"
          >
            Search
          </Link>
          {showMiniNav ? (
            <KeyboardArrowUpIcon
              className="mb-5"
              onClick={() => setShowMiniNav(false)}
            />
          ) : (
            <KeyboardArrowDownIcon
              className="mb-5"
              onClick={() => setShowMiniNav(true)}
            />
          )}
        </div>
        {showMiniNav && (
          <div className="animate-fadeUpMedium flex flex-col">
            <Link
              className="pl-4 mb-1 hover:pl-5 font-base sm:text-base text-sm text-slate-500"
              to="/search"
            >
              All products
            </Link>
            <Link
              className="pl-4 mb-1 hover:pl-5 font-base sm:text-base text-sm text-slate-500"
              to="/feature"
            >
              Featured
            </Link>
            <Link
              className="pl-4 mb-5 hover:pl-5 sm:text-base text-sm font-base text-slate-500"
              to="/cart"
            >
              Your bags
            </Link>
          </div>
        )}

        <Link
          className="mb-5 hover:text-yellow transition duration-100 ease-in-out text-2xl font-semibold"
          to="/about"
        >
          About
        </Link>
      </div>
      <div className="mt-5 pl-10">
        {!user ? (
          <>
            <div className="flex mb-5 ">
              <SignInButton />
              <div className="ml-5">
                <SignUpButton />
              </div>
            </div>
          </>
        ) : (
          <LogoutButton />
        )}
        <FindAStore />
      </div>
    </div>
  );
}

export default MenuToggle;

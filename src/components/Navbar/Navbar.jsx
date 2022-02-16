import React, { useLayoutEffect, useState } from "react";
import NavLinks from "./NavLinks/NavLinks";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import FindAStore from "./MenuToggle/FindAStore";
import { useUserAuth } from "../../hooks/Context/UserAuthContext";
import LogoutButton from "../Button/LogoutButton";
import SignUpButton from "../Button/SignUpButton";
import SignInButton from "../Button/SignInButton";
import MenuToggle from "./MenuToggle/MenuToggle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Navbar({ menuPage }) {
  const { user } = useUserAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isShowNav, setIsShowNav] = useState(false);

  const handleHideNavBarMobile = () => {
    setIsShowNav(false);
  };
  const showNavBarMobile = () => {
    setIsShowNav(true);
  };
  window.onscroll = () => {
    setIsShowNav(false);
  };
  useLayoutEffect(() => {
    const handleScroll = (e) => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div>
        <header
          className={
            scrolled
              ? `" hidden " `
              : `"   h-24 flex justify-between px-10 drop-shadow-sm items-center  fixed   z-40 top-0 left-0 right-0  bg-white  "  ${
                  menuPage && "fixed top-0 left-0 w-[95%]"
                }`
          }
        >
          <div className="flex items-center  gap-5">
            <Link
              to="/"
              className=" relative   font-krona hover:brightness-110 md:text-3xl text-2xl "
            >
              {" "}
              <span className="hover:text-slate-600">Welly</span>
              <div className="absolute md:w-9 md:h-9 h-7 w-7 top-2 right-4 -z-1 bg-yellow rounded-full">
                {" "}
              </div>
            </Link>
            <div className="hidden md:block">
              <NavLinks isMain />
            </div>
          </div>
          <div className="flex items-center gap-5   ">
            <div className="md:hidden">
              {isShowNav ? (
                <ClearIcon fontSize="large" onClick={handleHideNavBarMobile}>
                  {" "}
                </ClearIcon>
              ) : (
                <MenuRoundedIcon onClick={showNavBarMobile} fontSize="large" />
              )}
            </div>
            {isShowNav && <MenuToggle />}
            <div className={user ? "hidden md:block" : "hidden lg:block"}>
              <FindAStore />
            </div>
            {!user ? (
              <>
                <Link className="hidden md:block" to="/login">
                  <SignInButton />
                </Link>
                <Link className="hidden md:block" to="/register">
                  <SignUpButton />
                </Link>
              </>
            ) : (
              <div className="md:block hidden ">
                <LogoutButton></LogoutButton>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import { footerLinks } from "../constants/footerLinks";

import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  PhoneAndroid,
  Twitter,
} from "@mui/icons-material";

const Footer = () => (
  <section className="bg-dark text-light ">
    <footer className=" max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 space-x-0 md:space-x-8 space-y-8 md:space-y-0 order-3 md:order-2">
        {footerLinks.map((item) => (
          <div className=" container mx-auto px-10 pt-10 pb-5" key={item.title}>
            <h6
              className={
                item.title == "contact info"
                  ? "font-krona text-sm pb-4 capitalize md:ml-[-27px]"
                  : "font-krona text-sm pb-4 capitalize"
              }
            >
              {item.title}
            </h6>
            <div>
              {item.title == "contact info"
                ? item.links.map((link) => (
                    <div to={link.path} className="text-sm md:ml-[-27px]  ">
                      <span className="flex my-1 items-center ">
                        <Phone />
                        <p className="ml-1 ">+123-456-7890</p>
                      </span>
                      <span className="flex my-1 items-center">
                        <PhoneAndroid />
                        <p className="ml-1">+111-222-3333</p>
                      </span>

                      <span className="flex my-1 items-center">
                        <Email /> <p className="ml-1">qvthien6@gmail.com</p>
                      </span>
                      <span className="flex my-1 items-center">
                        <LocationOn />{" "}
                        <p className="ml-1">Baclieu, VietNam -19991105</p>
                      </span>
                      <div className="text-yellow space-x-4  order-2  flex  mb-6 ">
                        <Link
                          href="https://twitter.com"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-light-grey block mb-4"
                          to="/search"
                        >
                          <Facebook className="scale-140 " />
                        </Link>
                        <Link
                          href="https://twitter.com"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-light-grey block mb-4"
                          to="/"
                        >
                          <Twitter className="scale-140 " />
                        </Link>
                        <Link
                          href="https://instagram.com"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-light-grey block mb-4"
                          to="/"
                        >
                          <Instagram className="scale-140 " />
                        </Link>
                      </div>
                    </div>
                  ))
                : item.links.map((link) =>
                    link.name === "subsribe for last updates" ? (
                      <div className="flex flex-col">
                        <p className="text-sm pb-2">
                          subscribe for latest updates
                        </p>
                        <form
                          className="   flex flex-row md:flex-col  text-sm pb-4 capitalize   "
                          action=""
                        >
                          <input
                            type="text"
                            className="sm:w-2/4 focus:border-yellow lg:w-2/3 w-full text-black border-none  p-2 text-sm  "
                            placeholder="email@example.com "
                          />
                          <input
                            type="submit"
                            className=" px-auto py-3 md:py-2 sm:w-1/4  md:mt-2 text-center w-1/2   lg:w-1/3 font-base hover:brightness-110 text-black bg-yellow"
                            value="subscribe"
                          />
                        </form>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        key={link.name}
                        className="my-1 capitalize flex text-sm  hover:text-yellow"
                      >
                        {link.name}
                      </Link>
                    )
                  )}
            </div>
          </div>
        ))}
      </div>
    </footer>
    <div class="text-center text-sm mt-0 p-3 border-t-[1px] w-3/4 mx-auto   text-white">
      created by <span className="text-yellow"> Sunnyday</span> | all rights
      reserved
    </div>
  </section>
);

export default Footer;

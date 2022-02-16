import React from "react";

import FindAStore from "../Navbar/MenuToggle/FindAStore";

function FooterSecondary({ alignItems, paddingLeft, flexDirection }) {
  return (
    <div
      className="flex flex-row ml-5 sm:ml-0 border-t-[1px] border-category w-full p-7 pb-14 sm:flex-col gap-7 "
      style={{ alignItems, paddingLeft: `${paddingLeft * 2}px` }}
    >
      <div
        className="flex  pl-5 sm:pl-0 flex-col gap-7 "
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        <div className="gap-7 flex-col flex flex-wrap sm:gap-12 sm:flex-row ">
          <div>
            <FindAStore />
          </div>
          <div
            className="text-sm pl-10 sm:text-base flex flex-col gap-4 font-normal text-black "
            style={{ flexDirection }}
          >
            <div>Responsibility</div>
            <div>Web Accessibility</div>
            <div>Privacy Policy</div>
            <div>Terms of Use </div>
            <div>Cookie Preferences</div>
          </div>
        </div>
        <span className=" font-semibold sm:text-base text-sm">
          © 2022 Welly
        </span>
      </div>
    </div>
  );
}

export default FooterSecondary;

import React from "react";

function ShopCategories({ active, setActive }) {
  return (
    <div className="  mt-4  mb-3">
      <div className="pl-0  ">
        <h1 className=" font-krona pt-2  pb-2 pr-0 mb-2   ">Cosmetics</h1>
        <div className="border-b-[1px] border-solid border-category w-4/5 mt-[-5%] mb-4 mx-auto"></div>
        <div
          onClick={() => setActive(0)}
          className={
            active === 0
              ? "flex items-center  pl-1  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Concealer
          </span>
        </div>
        <div
          onClick={() => setActive("nail_polish")}
          className={
            active === "nail_polish"
              ? "flex items-center pl-1  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500 ">
            Nail polish
          </span>
        </div>
        <div
          onClick={() => setActive("mascara")}
          className={
            active === "mascara"
              ? "flex items-center pl-1  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Mascara
          </span>
        </div>

        <div
          onClick={() => setActive("bronzer")}
          className={
            active === "powder"
              ? "flex items-center pl-1  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Powder
          </span>
        </div>
        <h1 className=" font-krona pt-2  pb-2 pr-0 mb-2   ">Make up</h1>
        <div className="border-b-[1px] border-solid border-category w-4/5 mt-[-5%] mb-4 mx-auto"></div>
        <div
          onClick={() => setActive("foundation")}
          className={
            active === "foundation"
              ? "flex items-center pl-1  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Foundation
          </span>
        </div>
        <div
          onClick={() => setActive("bronzer")}
          className={
            active === "bronzer"
              ? "flex items-center pl-1  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Bronzer
          </span>
        </div>
        <div
          onClick={() => setActive("blush")}
          className={
            active === "blush"
              ? "flex items-center pl-1  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Blush
          </span>
        </div>
        <h1 className=" font-krona pt-2  pb-2 pr-0 mb-2   ">Eyes</h1>
        <div className="border-b-[1px] border-solid border-category w-4/5 mt-[-5%] mb-4 mx-auto"></div>
        <div
          onClick={() => setActive("eyebrow")}
          className={
            active === "eyebrow"
              ? "flex items-center pl-1  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Eyebrow
          </span>
        </div>
        <div
          onClick={() => setActive("eyeliner")}
          className={
            active === "eyeliner"
              ? "flex items-center pl-1  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Eyeliner
          </span>
        </div>
        <div
          onClick={() => setActive("eyeshadow")}
          className={
            active === "eyeshadow"
              ? "flex items-center pl-1  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Eyeshadow
          </span>
        </div>

        <h1 className=" font-krona pt-2  pb-2 pr-0 mb-2   ">Lips</h1>
        <div className="border-b-[1px] border-solid border-category w-4/5 mt-[-5%] mb-4 mx-auto"></div>
        <div
          onClick={() => setActive("lipstick")}
          className={
            active === "lipstick"
              ? "flex items-center pl-1  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Lipstick
          </span>
        </div>
        <div
          onClick={() => setActive("lip_liner")}
          className={
            active === "lip_liner"
              ? "flex items-center pl-1  py-[10px] pr-0  transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
              : "flex items-center  py-[10px] pr-0 transition duration-200 ease-in-out rounded-sm hover:pl-1 cursor-pointer"
          }
        >
          <span className="text-base capitalize font-base text-slate-500">
            Lip liner
          </span>
        </div>
      </div>
    </div>
  );
}

export default ShopCategories;

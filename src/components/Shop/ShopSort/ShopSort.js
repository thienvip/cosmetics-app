import React from "react";

function ShopSort({ setActive }) {
  return (
    <div className="w-full pr-10  ">
      <div>
        <select
          onChange={(e) => {
            const selectedItem = e.target.value;
            setActive(selectedItem);
          }}
          name="brand"
          className=" ml-5 rounded-2xl py-3 w-full px-4  text-sm mr-2 "
          style={{
            boxShadow:
              "0 0px 8px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
          id=""
        >
          <option value={"foundation"}>Concealer</option>
          <option value={"nail_polish"}>Nail polish</option>
          <option value={"lipstick"}>Lipstick</option>
          <option value={"mascara"}>Mascara</option>
          <option value={"bronzer"}>Bronzer</option>
          <option value={"blush"}>Blush</option>
          <option value={"eyebrow"}>Eyebrow</option>
          <option value={"eyeliner"}>Eyeliner</option>
          <option value={"eyeshadow"}>Eyeshadow</option>
          <option value={"lip_liner"}>Lip liner</option>
        </select>
      </div>
    </div>
  );
}

export default ShopSort;

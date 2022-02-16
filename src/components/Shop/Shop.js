import React, { useEffect, useState } from "react";

import ProductCart from "../ProductCard/ProductCart";

import ShopCategories from "./ShopCategories/ShopCategories";
import ShopSort from "./ShopSort/ShopSort";
import { useRef } from "react";
import LoandingIcon from "../Icons/LoandingIcon";

function Shop({ data }) {
  const quantityPageRef = useRef(9);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [endPosition, setEndPosition] = useState(9);
  const [list, setList] = useState([]);
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setList(data);
    setFiltered(data);
    applyFilter();
  }, [data, active]);

  const applyFilter = () => {
    if (active === 0) {
      setFiltered(data.slice(315, 360));
      return;
    }

    if (active) {
      const filtered = list.filter((product) =>
        product.product_type.includes(active)
      );
      setFiltered(filtered);
    }
  };

  const handlePagination = (index) => {
    setEndPosition((index + 1) * quantityPageRef.current);
    setCurrentIndex(
      (index + 1) * quantityPageRef.current - quantityPageRef.current
    );
  };

  const handlePrev = () => {
    if (currentIndex) {
      setCurrentIndex(currentIndex - quantityPageRef.current);
      setEndPosition(endPosition - quantityPageRef.current);
    }
  };

  const handleNext = () => {
    if (endPosition < list.length) {
      setCurrentIndex(currentIndex + quantityPageRef.current);
      setEndPosition(endPosition + quantityPageRef.current);
    }
  };

  if (list.length === 0)
    return (
      <div className="container mx-auto h-screen mt-32 md:mt-12 ">
        <LoandingIcon></LoandingIcon>
      </div>
    );

  return (
    <section>
      <div className="md:flex mt-24  md:gap-14 md:mt-5 ">
        <div className="hidden md:block mt-96 md:mt-0  ">
          <ShopCategories active={active} setActive={setActive} />
        </div>

        <div className="flex-1">
          <div className=" max-w-2xl md:mx-auto py-6  md::px-6 lg:max-w-7xl lg:px-8">
            <span className="font-krona tracking-tight text-2xl ">
              Shop now
            </span>
            <div className="md:hidden pt-5">
              <ShopSort setActive={setActive} data={data} />
            </div>
            <span className=" mb-3 border-b-[1px] text-slate-500 font-base text-xl border-solid font-bold capitalize border-category flex flex-wrap  pb-5 pt-10 pr-5 ">
              {active === 0 ? "Concealer" : active.replace(/_/g, " ")}
            </span>
          </div>
          <div className="grid grid-flow-row-dense sm:ml-4 grid-cols-2 gap-3 justify-between sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(currentIndex, endPosition).map((product, i) => (
              <ProductCart
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                imgUrl={product.api_featured_image}
                price={product.price}
                product={product}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center ">
            <button
              className="my-3 mx-1 cursor-pointer rounded-lg bg-light-grey border-2 border-solid border-transparent py-[5px] px-[10px]  "
              onClick={handlePrev}
            >
              Previous
            </button>
            {Array(Math.ceil(filtered.length / quantityPageRef.current))
              .fill(null)
              .map((_, index) => (
                <button
                  className={`my-3 mx-1 cursor-pointer  rounded-lg bg-light-grey border-2 border-solid border-transparent py-[5px] px-[10px] ${
                    currentIndex === 0 && index === currentIndex
                      ? "  border-2 border-solid border-lime-600  "
                      : index === currentIndex / quantityPageRef.current &&
                        "border-2 border-solid border-lime-600 "
                  }`}
                  onClick={() => handlePagination(index)}
                >
                  {index + 1}
                </button>
              ))}
            <button
              className="my-3 mx-1 cursor-pointer  rounded-lg bg-light-grey border-2 border-solid border-transparent py-[5px] px-[10px]"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;

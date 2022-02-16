import React from "react";

import useGetTopProducts from "../../hooks/useGetTopProducts";

import ButtonLink from "../Button/ButtonLink";
import LoandingIcon from "../Icons/LoandingIcon";
import ProductCart from "../ProductCard/ProductCart";
import SectionTitle from "../SectionTitle/SectionTitle";

function OurBest() {
  const data = useGetTopProducts();
  if (data.length === 0) {
    return (
      <div className="mx-auto container">
        <LoandingIcon />
      </div>
    );
  }
  return (
    <div>
      <div className="container mx-auto mt-10 mb-0">
        <div className="flex items-center justify-between mb-6">
          <SectionTitle text="New Arrivals" />
          <ButtonLink
            path="/about"
            text="see more"
            isMain
            className="hidden md:block"
          />
        </div>

        <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map((product) => (
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
      </div>
    </div>
  );
}

export default OurBest;

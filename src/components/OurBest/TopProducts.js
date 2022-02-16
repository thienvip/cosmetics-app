import React from "react";
import useGetOurBest from "../../hooks/useGetOurBest";

import ButtonLink from "../Button/ButtonLink";
import LoandingIcon from "../Icons/LoandingIcon";
import ProductCart from "../ProductCard/ProductCart";
import SectionTitle from "../SectionTitle/SectionTitle";

function TopProducts() {
  const data = useGetOurBest();
  if (data.length === 0) {
    return (
      <div className="mx-auto container">
        <LoandingIcon />
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto ">
        <div className="flex items-center justify-between mb-6">
          <SectionTitle text="Top Products" />
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

export default TopProducts;

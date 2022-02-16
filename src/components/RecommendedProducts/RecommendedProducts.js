import React, { Fragment } from "react";
import useGetRecommendedProduct from "../../hooks/useGetRecommendedProduct";
import LoandingIcon from "../Icons/LoandingIcon";
import ProductCard from "../ProductCard/ProductCart";
import SectionTitle from "../SectionTitle/SectionTitle";

const RecommendedProducts = ({ product }) => {
  const products = useGetRecommendedProduct(product);

  if (products.length === 0) {
    return (
      <div className="mx-auto container">
        <LoandingIcon />
      </div>
    );
  }

  return (
    <Fragment>
      <SectionTitle classes={"!font-normal"} text="You may also like" />
      <div className="grid grid-flow-row-dense grid-cols-2 gap-3 mt-5 justify-between sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            brand={item.brand}
            imgUrl={item.api_featured_image}
            price={item.price}
            product={item}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default RecommendedProducts;

import React, { useLayoutEffect } from "react";

import { useLocation } from "react-router-dom";

import Benefits from "../components/Benefits/Benefits";
import Footer from "../components/Footer.js/Footer";
import LoandingIcon from "../components/Icons/LoandingIcon";
import Navbar from "../components/Navbar/Navbar";

import ProductPreview from "../components/ProductPreview/ProductPreview";
import ProductTitle from "../components/ProductTitle/ProductTitle";
import RecommendedProducts from "../components/RecommendedProducts/RecommendedProducts";
import useGetSingleProduct from "../hooks/useGetSingleProduct";

function Product() {
  const location = useLocation();

  const singleProduct = useGetSingleProduct();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!singleProduct) {
    return (
      <div className="mx-auto mt-12 ml-5 container">
        <LoandingIcon />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className=" mt-32 mb-20 container mx-auto ">
        <ProductTitle
          name={singleProduct.name}
          type={singleProduct.product_type.replace(/_/g, " ")}
        />

        <ProductPreview
          product={singleProduct}
          name={singleProduct.name}
          img={singleProduct.api_featured_image}
          type={singleProduct.product_type}
          category={singleProduct.category}
          brand={singleProduct.brand}
          price={singleProduct.price}
          description={singleProduct.description}
        />

        <Benefits />
        <RecommendedProducts product={singleProduct} />
      </div>
      <Footer />
    </div>
  );
}

export default Product;

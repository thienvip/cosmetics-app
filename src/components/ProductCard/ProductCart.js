import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductPrice from "../ProductPrice/ProductPrice";
import { HiOutlineHeart, HiExternalLink, HiSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";

function ProductCart({ id, name, brand, imgUrl, price, product }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="">
      <div
        style={{
          boxShadow:
            "0 0px 8px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        }}
        className="mt-2 relative  group flex flex-col  align-center   h-56 sm:h-72  overflow-hidden   ml-2 sm:mr-5 mb-6 px-4 py-6    "
      >
        <div className="sm:bg-products opacity-0 group-hover:opacity-100 absolute z-10 top-0 right-0 bottom-0 left-0 "></div>
        <div className="flex flex-1  flex-col justify-center pb-4">
          <LazyLoadImage
            src={`https://${imgUrl}`}
            alt={name}
            className="mx-auto  object-contain   "
          />

          <div className="scale-75 hidden sm:block top-10 sm:scale-100 absolute overflow-hidden sm:top-20 sm:right-0  sm:left-0 bottom-[10px] w-44 h-32 mx-auto border-[1px] border-solid border-yellow group-hover:opacity-100 opacity-0 z-20">
            <div className="flex flex-wrap gap-2 justify-center delay-75 translate-y-[-10px] relative transition transform duration-500  ease-in-out  group-hover:translate-y-5">
              <HiOutlineHeart className="h-9 w-9 md:h-7 md:w-7   text-white rounded-full  mb-3 text-center bg-icon p-[4px] hover:text-yellow" />
              <Link to="/search">
                <HiSearch className="h-9 w-9 md:h-7 md:w-7   text-white rounded-full  mb-3 text-center bg-icon p-[4px] hover:text-yellow" />
              </Link>
              <Link to={`/product/${id}`}>
                <HiExternalLink className="h-9 w-9 md:h-7 md:w-7   text-white rounded-full  mb-3 text-center bg-icon p-[4px] hover:text-yellow" />
              </Link>
            </div>
            <Link
              to="/cart"
              onClick={() => {
                handleAddToCart(product);
              }}
              className="group-hover:translate-y-[46px] hover:brightness-110 text-center pt-[10px]  transform   duration-500   text-white w-36 h-10 absolute translate-y-[90px] left-4  font-base  text-sm font-normal transition  ease-in-out bg-yellow "
            >
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>

      <div className="p-3 ">
        <Link to={`/product/${id}`}>
          <p className="text-yellow  font-krona text-sm capitalize hover:text-amber-200">
            {name.replace(/^(.{12}[^\s]*).*/, "$1")}
          </p>
        </Link>

        <p className="mb-4 ">{brand}</p>

        <ProductPrice price={price} />
      </div>
    </div>
  );
}

export default ProductCart;

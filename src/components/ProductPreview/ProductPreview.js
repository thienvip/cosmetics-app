import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import ProductPrice from "../ProductPrice/ProductPrice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { addToCart } from "../../Redux/cartSlice";
import { Link } from "react-router-dom";

function ProductPreview({
  product,
  name,
  img,
  type,
  category,
  price,
  description,
  brand,
}) {
  const imgUrl = `https://${img}`;
  const formatType = type.replace(/_/g, " ");
  const formatDescription = description.replace(/<\/?[^>]+(>|$)/g, "");
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row   items-center   justify-between mb-20">
        <div className="flex items-center justify-center w-3/4 sm:w-2/4  md:mr-5 lg:mr-10">
          <LazyLoadImage src={imgUrl} alt={name} />
        </div>
      </div>
      <div>
        <p className="text-yellow text-sm font-krona">{formatType}</p>
        <h1 className="font-krona text-base">{name}</h1>

        <p>{category}</p>

        <div className="flex  justify-between my-5  ">
          <ProductPrice price={price} isLarge />
          <div className=" font-krona   rounded-b-full      text-center">
            <Link to="/cart">
              <button
                onClick={() => {
                  handleAddToCart(product);
                }}
                className="inline-block rounded-full font-bold font-krona text-xs bg-yellow py-3 px-6"
              >
                add to basket
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-category pt-4 pb-2">
        <h1 className="font-krona">Description</h1>
        <div className="capitalize flex gap-5 mt-1 mb-3">
          <p>
            <span className="text-slate-500"> Category: </span>
            {formatType}
          </p>
          <p>
            <span className="text-slate-500"> Brand: </span>
            {brand}
          </p>
        </div>
        <p>{formatDescription}</p>
      </div>
    </div>
  );
}

export default ProductPreview;

ProductPreview.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

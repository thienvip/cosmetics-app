import { ArrowBack } from "@mui/icons-material";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/Context/UserAuthContext";
import Footer from "../components/Footer.js/Footer";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";

import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
} from "../Redux/cartSlice";

function Cart({ isMain }) {
  const cart = useSelector((state) => state.cart);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const { user } = useUserAuth();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleSubmit = (user) => {
    if (!user) {
      setIsShow(false);
      navigate("/login");
    } else {
      setIsShow(true);
    }
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = (cartItem) => {
    dispatch(clearCart(cartItem));
  };
  return (
    <div>
      <Navbar />

      <div
        className={
          isMain
            ? "container  pt-8 md:pt-0 md:mt-10 mx-auto mt-20 "
            : "container  pt-8 md:pt-0 md:mt-32 mx-auto mt-20 "
        }
      >
        <h2 className=" -z-1 text-lg text-center font-krona relative  ">
          Your bags
        </h2>

        {cart.cartItems.length === 0 ? (
          <div className=" mt-8 flex flex-col md:mt-36  text-sm items-center h-screen">
            <p className="font-base md:font-base md:text-lg">
              There is no product here
            </p>
            <Link
              className="mt-4 mb-10 font-light  text-md text-slate-600 flex items-center  "
              to="/"
            >
              <ArrowBack className="w-4 h-4s " />
              <span className="ml-2 ">Continue Shopping</span>
            </Link>
          </div>
        ) : (
          <div className="">
            <div className="mt-8 md:font-krona mb-4 text-sm grid grid-col-6 grid-flow-col items-center py-2">
              <h3 className="text-sm uppercase col-span-3  pl-2">Product</h3>
              <h3 className="text-sm uppercase pl-[90px] ">Price</h3>
              <h3 className="text-sm uppercase mx-auto">Quantity</h3>
              <h3 className="text-sm uppercase pr-2 justify-self-end">Total</h3>
            </div>
            <div>
              {cart.cartItems?.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="grid grid-cols-6 grid-flow-col items-center border-t-[1px] solid border-light-grey py-4 "
                >
                  <div className="col-span-3 flex">
                    <img
                      className="w-24  h-24 max-w-[100%] mr-1 "
                      src={cartItem.api_featured_image}
                      alt={cartItem.name}
                    />
                    <div>
                      <div className="text-base font-normal">
                        {cartItem.name}
                      </div>
                      <p className="text-light-grey brightness-90">
                        <span className="">brand: </span> {cartItem.brand}
                      </p>
                      <Link to={`/product/${cartItem.id}`}>
                        <button className="sm:bg-yellow hover:brightness-95 rounded-md py-1 px-2 mt-2 text-left sm:text-white font-krona text-xs">
                          see more
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div>{cartItem.price} &euro;</div>
                  <div className="flex flex-start justify-center mx-auto  md:w-36 w-20 max-w-full border-[0.5px] border-slate-600 rounded-md ">
                    <button
                      onClick={() => handleDecreaseCart(cartItem)}
                      className="px-2 md:px-6 py-3 cursor-pointer"
                    >
                      -
                    </button>
                    <div className="py-3 ">{cartItem.cartQuantity}</div>
                    <button
                      onClick={() => {
                        handleIncreaseCart(cartItem);
                      }}
                      className="px-2 md:px-6 py-3 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <div className="justify-self-end pr-2 font-semibold ">
                    &euro;{cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between  pt-8 border-t-[1px] border-slate-700 ">
              <button
                onClick={() => {
                  handleClearCart();
                }}
                className="sm:w-32 w-15 hidden sm:block max-w-full px-1 sm:px-0 text-xs sm:text-lg rounded-lg text-slate-600 sm:h-11 h-8 tracking-wider border-[0.5px] border-slate-700 text-grey bg-none cursor-pointer"
              >
                Clear Cart
              </button>
              <div className="font-bold ml-auto  ">
                <div className="font-bold flex   justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold ">
                    &euro; {cart.cartTotalAmount}
                  </span>
                </div>
                <p className="text-sm font-extralight my-2 mx-0">
                  Taxes and shipping calculated at checkout
                </p>

                <button
                  onClick={() => {
                    handleSubmit(user);
                  }}
                  className="w-full  h-10 rounded-md font-normal cursor-pointer text-white bg-yellow tracking-wider"
                >
                  Check out
                </button>

                <Link
                  className="mt-4 mb-10 font-light  text-md text-slate-600 flex items-center  "
                  to="/"
                >
                  <ArrowBack className="w-4 h-4s " />
                  <span className="ml-2 ">Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
      <Modal open={isShow} setOpen={setIsShow}></Modal>
    </div>
  );
}

export default Cart;

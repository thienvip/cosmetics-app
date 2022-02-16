import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/cartSlice";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import {
  ReportGmailerrorredRounded,
  ShoppingBagTwoTone,
} from "@mui/icons-material";
import { toast } from "react-toastify";

export default function Modal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async ({ cartItem }) => {
    dispatch(clearCart(cartItem));
    setOpen(false);
    toast.success("Payment successful", {
      position: "top-left",
    });
    navigate("/");
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 md:mt-0 mt-20 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow sm:mx-0 sm:h-10 sm:w-10">
                    <ShoppingBagTwoTone
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg pt-3 leading-6 font-medium text-gray-900"
                    >
                      {`Your total order amount is $${cart.cartTotalAmount}.`}
                      <div className=" mt-5  text-xs text-slate-600 ">
                        Please fill your information to complete checkout
                        process
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                          <div className="relative mb-2 mt-2">
                            <TextField
                              name="address"
                              label="Your address"
                              type="text"
                              InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                              }}
                              InputProps={{ style: { fontWeight: "800" } }}
                              className="w-full"
                              {...register("adress", {
                                required: "Enter your address",
                              })}
                              error={!!errors?.adress}
                              helperText={
                                errors?.adress ? errors.adress.message : null
                              }
                            />
                            {errors.adress && (
                              <ReportGmailerrorredRounded className="absolute right-1 top-0  translate-y-[70%] text-red-600" />
                            )}
                          </div>
                          <div className="relative mb-2">
                            <TextField
                              name="lName"
                              label="Phone number"
                              type="number"
                              InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                              }}
                              InputProps={
                                ({ style: { fontWeight: "800" } },
                                { inputMode: "numeric", pattern: "[0-9]*" })
                              }
                              className="w-full"
                              {...register("lname", {
                                required: "Enter your number",
                                minLength: {
                                  value: 6,
                                  message: "Minimum required length is 9",
                                },
                              })}
                              error={!!errors?.lname}
                              helperText={
                                errors?.lname ? errors.lname.message : null
                              }
                            />
                            {errors.lname && (
                              <ReportGmailerrorredRounded className="absolute right-1 top-0  translate-y-[70%] text-red-600" />
                            )}
                          </div>
                          <div className="  md:mt-5 mt-10 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                              type="submit"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow text-base font-medium text-white hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Checkout
                            </button>
                            <button
                              type="button"
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => setOpen(false)}
                              ref={cancelButtonRef}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </Dialog.Title>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

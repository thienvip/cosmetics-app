import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibitlilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormSubmit from "../components/FormSubmit/FormSubmit";
import FooterSecondary from "../components/FooterSecondary/FooterSencondary";
import { Link, useNavigate } from "react-router-dom";
import { ReportGmailerrorredRounded } from "@mui/icons-material";

import { useUserAuth } from "../hooks/Context/UserAuthContext";
import GoogleButton from "react-google-button";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  let navigate = useNavigate();
  const onSubmit = async ({ email, password }) => {
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);

  console.log(watch("example"));

  return (
    <div className="flex flex-col md:flex-row">
      <div
        className="top-0   md:fixed relative w-full h-[150px] gap-3  left-0  md:bottom-0 overflow-hidden md:w-[40vw] md:h-screen flex flex-col   "
        style={{
          boxShadow:
            "0 1px 1px rgba(0, 0, 0, 0.24), 0 4px 4px rgba(0, 0, 0, 0.12)",
        }}
      >
        <div>
          <Link
            to="/"
            className=" relative top-5 left-5   font-krona hover:brightness-110 md:text-3xl text-2xl "
          >
            {" "}
            <span className="hover:text-slate-600">Welly</span>
            <div className="absolute md:w-9 md:h-9 h-7 w-7 top-2 right-4 -z-1 bg-yellow rounded-full">
              {" "}
            </div>
          </Link>
        </div>

        <div className="w-full h-full pl-2 pr-2  lg:text-2xl text-center grid place-items-center font-krona text-xl text-black">
          <h1 className="">Sign in or create an account 🌟</h1>
        </div>
      </div>

      <div className=" grid md:ml-[40vw]   w-screen md:w-[60vw] overflow-hidden bg-light-grey py-5">
        <form
          className="min-w-[300px] min-h-[420px] px-20 flex flex-col gap-5 py-10 pt-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative ">
            <TextField
              name="email"
              label="Email Address"
              type="email"
              variant="standard"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "500" } }}
              className="w-full relative "
              {...register("email", { required: "Enter an email" })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
            {errors.email && (
              <ReportGmailerrorredRounded className="absolute right-0 top-0 translate-y-[80%] text-red-600" />
            )}
          </div>
          <div className="relative">
            <TextField
              name="password"
              label="Password"
              type={passwordShown ? "text" : "password"}
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              variant="standard"
              InputProps={{ style: { fontWeight: "500" } }}
              className="w-full"
              {...register("password", {
                required: "Enter an password",
              })}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />
            {errors.password && (
              <ReportGmailerrorredRounded className="absolute right-0 top-0 translate-y-[80%] text-red-600" />
            )}
            {passwordShown ? (
              <VisibilityIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="cursor-pointer text-grey absolute top-0 right-[10%] translate-y-[80%]"
              />
            ) : (
              <VisibitlilityOffIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="cursor-pointer text-grey absolute top-0 right-[10%] translate-y-[80%]"
              />
            )}
          </div>
          {error && <div>{error}</div>}
          <div className="mt-5">
            <span className="text-sm text-dark-grey leading-10">
              New to Welly?
            </span>

            <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
            <Link
              className="block mb-4 leading-10  font-medium text-base text-[#00653e] hover:brightness-110   "
              to="/register"
            >
              Create your Welly Account
            </Link>
          </div>
          <FormSubmit name="Sign in" type="submit" />
        </form>
        <div className="text-center w-full py-5  px-0  bg-[#2d2926] text-white">
          <h4 className="text-sm font-extrabold tracking-wider">
            JOIN WELLY® REWARDS
          </h4>
        </div>
        <div className="bg-[#edebe9] w-full py-8 px-0">
          <div className="max-w-xs ml-auto mr-auto flex flex-col gap-5 ">
            <Link
              className="inline-block bg-none border-[1px] hover:border-white hover:brightness-110 border-black rounded-[50px] py-2 px-4 leading-snug text-center text-black mr-auto"
              to="/register"
            >
              Join now
            </Link>
            <h4 className="text-xl font-semibold text-black">
              Create an account and bring on the Rewards!
            </h4>
            <p className="font-semibold text-sm leading-relaxed">
              Join Welly® Rewards to earn free makeup and skincare products, get
              free refills, pay and order with your phone, and more.
            </p>
          </div>
        </div>
        <FooterSecondary />
      </div>
    </div>
  );
}

export default Login;

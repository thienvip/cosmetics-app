import { ReportGmailerrorredRounded } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import FormSubmit from "../components/FormSubmit/FormSubmit";
import FooterSecondary from "../components/FooterSecondary/FooterSencondary";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibitlilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/Context/UserAuthContext";
function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const Cpassword = watch("password");

  let navigate = useNavigate();

  const onSubmit = async ({ fName, lName, adress, email, password }) => {
    try {
      await signUp(email, password, fName, lName, adress);
      setError("");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="grid place-items-center gap-10">
      <div className="bg-white shadow-lg w-full h-[101px] flex items-center ">
        <Link
          to="/"
          className=" relative left-5  font-krona hover:brightness-110 md:text-3xl text-2xl "
        >
          {" "}
          <span className="hover:text-slate-600 relative z-20">Welly</span>
          <div className="absolute md:w-9 md:h-9 h-7 w-7 top-2 right-4  bg-yellow rounded-full">
            {" "}
          </div>
        </Link>
      </div>
      <h1 className="text-dark font-extrabold text-3xl">Create an account</h1>

      <div className="text-center">
        <h4 className="text-dark  leading-snug font-extrabold text-sm mb-5">
          WELLY® REWARDS
        </h4>
        <p className="text-dark leading-normal max-w-lg font-semibold text-sm">
          Join Welly Rewards to earn Stars for discounts, any way you pay. Get
          access to mobile ordering, a birthday Reward, and more
        </p>
      </div>
      <div
        className="flex flex-col  rounded-xl max-w-lg  mb-5"
        style={{
          boxShadow:
            "0 0px 8px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        }}
      >
        <div className="p-14">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-dark text-xl mb-2">Personal Information</h4>
            <div className="relative mb-2">
              <TextField
                name="fName"
                label="Your name"
                type="text"
                InputLabelProps={{
                  style: { color: "rgba(0,0,0,.56)" },
                }}
                InputProps={{ style: { fontWeight: "800" } }}
                className="w-full"
                {...register("fname", { required: "Enter your name" })}
                error={!!errors?.fname}
                helperText={errors?.fname ? errors.fname.message : null}
              />
              {errors.fname && (
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
                helperText={errors?.lname ? errors.lname.message : null}
              />
              {errors.lname && (
                <ReportGmailerrorredRounded className="absolute right-1 top-0  translate-y-[70%] text-red-600" />
              )}
            </div>
            <div className="relative mb-2">
              <TextField
                name="address"
                label="Your address"
                type="text"
                InputLabelProps={{
                  style: { color: "rgba(0,0,0,.56)" },
                }}
                InputProps={{ style: { fontWeight: "800" } }}
                className="w-full"
                {...register("adress", { required: "Enter your address" })}
                error={!!errors?.adress}
                helperText={errors?.adress ? errors.adress.message : null}
              />
              {errors.adress && (
                <ReportGmailerrorredRounded className="absolute right-1 top-0  translate-y-[70%] text-red-600" />
              )}
            </div>

            <h4 className="mt-12 text-dark text-xl mb-2">Account Security</h4>
            <div className="relative mb-2">
              <TextField
                onFocus="hello"
                name="email"
                label="Email Address"
                type="email"
                InputLabelProps={{
                  style: { color: "rgba(0,0,0,.56)" },
                }}
                InputProps={{ style: { fontWeight: "800" } }}
                className="w-full"
                {...register("email", {
                  required: "Enter your email address",
                })}
                error={!!errors?.email}
                helperText={errors?.email ? errors.email.message : null}
              />

              {errors.email && (
                <ReportGmailerrorredRounded className="absolute right-1 top-0  translate-y-[70%] text-red-600" />
              )}
            </div>
            <div className="relative mb-2">
              <TextField
                name="password"
                label="Password"
                type={passwordShown ? "text" : "password"}
                InputLabelProps={{
                  style: { color: "rgba(0,0,0,.56)" },
                }}
                InputProps={{ style: { fontWeight: "500" } }}
                className="w-full"
                {...register("password", {
                  required: "Enter your password",

                  minLength: {
                    value: 6,
                    message: "Minimum required length is 6",
                  },
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
            <div className="relative">
              <TextField
                name="Confirm Password"
                label="ConFirm Password"
                type={confirmPasswordEye ? "text" : "password"}
                InputLabelProps={{
                  style: { color: "rgba(0,0,0,.56)" },
                }}
                InputProps={{ style: { fontWeight: "500" } }}
                className="w-full"
                {...register("Cpassword", {
                  required: "Confirm password",
                  validate: (value) =>
                    value === Cpassword || "The passwords do not match",
                })}
                onPaste={(e) => {
                  e.preventDefault();
                  return false;
                }}
                error={!!errors?.Cpassword}
                helperText={errors?.Cpassword ? errors.Cpassword.message : null}
              />
              {errors.Cpassword && (
                <ReportGmailerrorredRounded className="absolute right-0 top-0 translate-y-[80%] text-red-600" />
              )}
              {confirmPasswordEye ? (
                <VisibilityIcon
                  onClick={() => setConfirmPasswordEye(!confirmPasswordEye)}
                  className="cursor-pointer text-grey absolute top-0 right-[10%] translate-y-[80%]"
                />
              ) : (
                <VisibitlilityOffIcon
                  onClick={() => setConfirmPasswordEye(!confirmPasswordEye)}
                  className="cursor-pointer text-grey absolute top-0 right-[10%] translate-y-[80%]"
                />
              )}
            </div>
            <div className="mb-10">
              <h4 className="text-dark-grey text-sm mt-6 mb-2">
                COLLECT MORE STARS & EARN REWARDS
              </h4>
              <span className=" font-medium   ">
                Email is a great way to know about offers and what’s new from
                Welly.
              </span>
            </div>
            {error && <div>{error}</div>}
            <FormSubmit name="Create account" type="submit" />
          </form>
        </div>
      </div>
      <FooterSecondary alignItems="center" flexDirection="column" />
    </div>
  );
}

export default Register;

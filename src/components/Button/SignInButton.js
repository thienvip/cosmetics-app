import React from "react";
import { Link } from "react-router-dom";
function SignInButton() {
  return (
    <Link
      className="inline-block font-bold hover:text-light border-solid border-black border-[1px] rounded-[50px] px-4 py-2 leading-tight text-center transition duration-150 ease-in-out cursor-pointer bg-white text-black text-sm font-base hover:bg-slate-700"
      to="/login"
    >
      Sign in
    </Link>
  );
}

export default SignInButton;

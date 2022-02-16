import React from "react";

import { Link } from "react-router-dom";

function SignUpButton() {
  return (
    <Link
      className="inline-block border-solid border-black border-[1px] rounded-[50px] px-4 py-2 leading-tight text-center transition duration-150 ease-in-out cursor-pointer bg-black text-white text-sm font-base hover:bg-slate-700"
      to="/register"
    >
      Join now
    </Link>
  );
}

export default SignUpButton;

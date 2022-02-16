import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/Context/UserAuthContext";

function LogoutButton() {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <button
      onClick={() => {
        handleLogOut();
      }}
      className="inline-block font-bold hover:text-light border-solid border-black border-[1px] rounded-[50px] px-4 py-2 leading-tight text-center transition duration-150 ease-in-out cursor-pointer bg-white text-black text-sm font-base hover:bg-slate-700 "
    >
      Log Out
    </button>
  );
}

export default LogoutButton;

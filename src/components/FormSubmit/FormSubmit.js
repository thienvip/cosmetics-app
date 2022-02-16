import React from "react";

function FormSubmit({ name, type, onClick }) {
  return (
    <button
      className="relative rounded-full font-krona inline-block z-10 py-5 px-6 bg-[#00a862] hover:brightness-110 shadow-lg border-0 text-white  font-bold leading-tight overflow-hidden text-center ml-auto cursor-pointer"
      type={type}
    >
      {name}
    </button>
  );
}

export default FormSubmit;

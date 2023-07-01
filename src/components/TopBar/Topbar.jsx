import React from "react";
import { BsKanban } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const Topbar = () => {
  return (
    <div
      className="fixed top-0 left-0 z-40 w-screen h-20 max-h-20 bg-dark-purple items-center flex border-b 
    border-y-stone-950 justify-between "
    >
      <h1 className="text-white origin-left font-medium  ml-5 flex items-center lg:text-4xl md:text-2xl sm:text-1xl">
        <BsKanban className=" text-white text-4xl mr-2 mt-2 cursor-pointer" />{" "}
        Task manager
      </h1>

      <div className="flex items-center bg-dark-purple text-white border border-white rounded-full p-2 px-4 mr-4 cursor-pointer hover:border-red-200">
        <AiOutlinePlus className="mr-2 text-white text-2xl" /> Add new task
      </div>
    </div>
  );
};

export default Topbar;

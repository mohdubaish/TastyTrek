import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch=useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
      <div>
        <h3 className="text-xl font-bold ">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">TastyTreak</h1>
      </div>
      <div>
        <input
          type="search"
          id=""
          placeholder="Search..."
          autoComplete="off"
          onChange={(e)=>dispatch(setSearch(e.target.value))}
          className="p-3 border-2 border-gray-500 rounded-md outline-none w-full  lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;

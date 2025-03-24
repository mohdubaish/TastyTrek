import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👏",
          });
        }}
        className="absolute right-7 cursor-pointer text-gray-500 hover:text-gray-800"
      />

      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="laeding-5">
        <h2 className="font-bold text-gray-500 ">{name}</h2>
        <div className="flex justify-between">
          <span className="text-gray-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() => (qty > 1 ? dispatch(decrementQty({ id })) : qty--)}
              className="border-2 border-purple-400 text-purple-400 hover:text-white hover:border-none hover:bg-gray-400 rounded-md text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-purple-400 text-purple-400 hover:text-white hover:border-none hover:bg-gray-400 rounded-md text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

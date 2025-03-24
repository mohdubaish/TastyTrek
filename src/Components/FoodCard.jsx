import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";


const FoodCard = ({ id, name, price, desc, img, rating,handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scal-110 cursor-grab transition-all duration-500 ease-in-out overflow-hidden"
      />
      <div className="text-sm flex justify-between s">
        <h2 className="">{name}</h2>

        <span className="text-purple-500">₹{price}</span>
      </div>
      <p className="font-normal text-sm">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating,img, price, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-purple-400 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;

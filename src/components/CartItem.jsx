import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import { FiPlusSquare } from "react-icons/fi";

const CartItem = ({ image, title, price ,quantity}) => {
  return (
    <div className="flex ms-8 me-10 my-3 text-gray-600 bg-white w-[90%] border-primary border p-5 rounded-xl relative">
      <div className="flex items-center">
        <img src={image} className="h-24 me-5" alt="" />
        <div className="flex flex-col">
          <h1 className="w-[80%] text-xl">{title}</h1>
          <p className="text-xl font-bold text-primary">$ {price}</p>
        </div>
      </div>
      <div className="flex ms-auto text-gray-600 justify-center items-center me-5 flex-col">
        <button className="text-2xl font-semibold">
          <FiPlusSquare />
        </button>
        <p className="my-1 text-xl text-primary rounded-md px-2 border-2 border-primary">
          {quantity}
        </p>
        <button className="text-2xl">
          <FiMinusSquare />
        </button>
      </div>
      <div className="bg-primary rounded-full flex justify-center items-center text-white w-8 h-8 absolute top-[-10px]  right-[-10px]">
        <FiTrash2 />
      </div>
    </div>
  );
};

export default CartItem;

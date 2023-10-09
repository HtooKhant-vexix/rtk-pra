import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/service/cartSlice";
import { BsFillCartCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
const Card = (props) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cart);
  const { id, title, price, description, image } = props;
  const [add, setAdd] = useState(false);

  return (
    <div
      key={id}
      className="w-[300px] text-gray-600  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img
          className="p-8 h-[250px] mx-auto rounded-t-lg"
          src={image}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5 text-gray-600">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-600">
            {title.substring(0, 20)}
          </h5>
        </a>
        {/* <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div> */}
        <div className=" my-2 text-gray-500">{description.slice(0,45)} <span className="text-gray-400">see more ...</span> </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl  font-bold">$ {price}</span>
          {/* {cartData.map((e) => e.id).includes(id) ? (
            <p className="text-white flex items-center gap-2 select-none bg-green-400  hover:bg-green-400/80 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <BsFillCartCheckFill /> Added
            </p>
          ) : ( */}
          <button
            onClick={() => dispatch(addToCart(props))}
            className={` text-white select-none font-medium rounded-lg text-sm px-5 py-2.5 text-center:null ${
              !cartData.map((e) => e.id).includes(id)
                ? " bg-primary border-2 hover:border-primary/80 duration-300 hover:bg-primary/80 "
                : " bg-transparent border-2 border-green-400 duration-300 "
            }`}
          >
            {!cartData.map((e) => e.id).includes(id) ? (
              <div className="duration-300">Add to cart</div>
            ) : (
              <div className="flex text-green-400 font-semibold duration-300 items-center gap-2">
                <BsFillCartCheckFill /> Added
              </div>
            )}
          </button>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Card;

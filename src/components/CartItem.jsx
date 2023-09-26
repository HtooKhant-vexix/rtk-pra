import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import { FiPlusSquare } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../feature/service/cartSlice";
import { motion } from "framer-motion";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cart);
  const [del, setDel] = useState(false);
  const { image, title, price, quantity, id } = props;
  console.log(del);
  // const multiFun = () => {
  //   setDel(true);
  //   // setDel((test = cartData.map((e) => e.id) == id));
  // };
  del&&setTimeout(() => {
    dispatch(remove(props));
    setDel(false)
    // console.log(del);
  }, 200);

  return (
    <div
      onAnimationEnd={() => console.log("hello")}
      key={id}
      className={`flex ms-8 me-10 my-3 text-gray-600 bg-white w-[90%] duration-500 border-primary border p-5 rounded-xl relative ${
        del ? "translate-x-[600px] scale-0" : "translate-x-0"
      }`}
    >
      <div className="flex items-center">
        <img src={image} className="h-24 me-5" alt="" />
        <div className="flex flex-col">
          <h1 className="w-[80%] text-xl">{title.substring(0,20)}</h1>
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
      <motion.div
        whileTap={{ scale: 1.1 }}
        initial={{ scale: 1 }}
        className="bg-primary rounded-full flex duration-200 hover:bg-red-500 justify-center items-center text-white w-8 h-8 absolute top-[-10px]  right-[-10px]"
        // onClick={() => multiFun()}
        onClick={() => setDel(true)}
      >
        <FiTrash2 />
      </motion.div>
    </div>
  );
};

export default CartItem;

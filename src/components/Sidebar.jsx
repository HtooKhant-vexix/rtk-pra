import React, { useState } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import { ImCancelCircle } from "react-icons/im";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { BsCart4 } from "react-icons/bs";

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { scale: 0, opacity: 0 },
};
const side = {
  enter: { x: "-100%" },
  out: { opacity: 0, x: 0 },
};
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispact = useDispatch();

  const handleClick = () => {
    // e.preventDefault();
    setIsOpen(!isOpen);
  };

  const data = useSelector((state) => state.cart);
  // console.log(data);
  return (
    <>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={
          isOpen
            ? "bg-primary/20  z-50 fixed w-full bg-opacity-0  h-screen backdrop-blur-sm"
            : "  z-50 fixed w-full  h-screen"
        }
      ></motion.div>
      <motion.div
        animate={isOpen ? "enter" : "out"}
        variants={side}
        transition={{
          ease: "easeOut",
          duration: 0.2,
        }}
        className="bg-white fixed right-[-500px] py-28 overflow-scroll z-50 h-full ms-auto w-[500px] "
        // onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex py-8 pt-5 justify-between absolute bg-white z-50 top-0 items-center px-6 w-full">
          <motion.button
            className="text-3xl p-3 rounded-xl border-2 hover:text-red-400 hover:border-red-400 duration-200 text-primary border-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ImCancelCircle />
          </motion.button>
          <h1 className="text-3xl font-bold text-primary font-serif">Shopping Cart</h1>
        </div>
        <div className="overflow-scroll h-full">
          {data.cartData.length != 0 ? (
            data.cartData?.map((e) => <CartItem key={e.id} {...e} />)
          ) : (
            <div className="flex justify-center items-center text-primary/20 font-sans  h-full w-full">
              <div className="flex flex-col items-center gap-4 font-semibold text-4xl">
                <BsCart4 className="text-[100px]"/>
                EMPTY CART
              </div>
            </div>
          )}
        </div>
        <div className="flex py-8 pt-5 justify-between absolute bg-white z-50 items-center bottom-0 px-6 w-full">
          <h1 className="text-3xl font-bold text-primary">
            Total : {data.totalAmount.toFixed(2)}{" "}
          </h1>
          <button
            className="text-xl p-3 rounded-xl items-center gap-2 border-2 flex text-primary border-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdShoppingCartCheckout />
            <div className="text-xl  font-semibold"> Check out </div>
          </button>
        </div>
      </motion.div>
      <Nav click={handleClick} />
    </>
  );
};

export default Sidebar;

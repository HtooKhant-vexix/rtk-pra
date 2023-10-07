import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Nav = ({ click }) => {
  const navigate = useNavigate();

  const openSidebar = () => {
    // console.log(click);
    click();
  };
  const [search, setSearch] = useState();
  // console.log(search);

  const { cartData } = useSelector((state) => state.cart);

  const submitHandler = (e) => {
    e.preventDefault(),
     navigate('/search', {state:filterPd });

    console.log(search);
    console.log(filterPd);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const { cartData } = useSelector((state) => state.cart);

  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setProducts(data);
    // setLoading(false)
  };

  const filterPd = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  // console.log(filterPd);

  return (
    <>
      <div className="shadow-2xl bg-white shadow-primary/20 sticky top-0 z-40">
        <div className=" flex items-center justify-between  p-6 w-[80%] mx-auto">
          <p className="font-bold font-serif text-primary text-4xl">HAK</p>
          <div className="w-[50%] flex items-center justify-end">
            <div className="w-[70%] me-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <form >
                  <input
                    // onChange={(e) => console.log(e.target.value)}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:text-white"
                    placeholder="Search ..."
                    required
                  />
                  <button
                    onClick={submitHandler}
                    // type="submit"
                    className="text-white font-xl absolute right-2.5 bottom-2.5 bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-primary/80"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
            <button
              onClick={openSidebar}
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary/90 focus:ring-4 focus:outline-none"
            >
              <HiShoppingCart className="text-2xl" />
              {cartData.length != 0 && (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {cartData.length}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {HiOutlineShoppingCart} from 'react-icons/hi'
import { FaShopify } from "react-icons/fa";

const Header = () => {
  const productData = useSelector((state) => state.shop.productsData);
  console.log(productData);
  return (
    <div className=" w-full h-20 bg-purple-900 text-gray-200 sticky top-0 z-50">
   
      <div className=" h-full mx-auto flex items-center justify-around">
        <Link to="/">
          <div className="flex text-3xl items-baseline ">
          <FaShopify className="mr-2"/>
           <h1 > Modern Shop</h1>
          </div>
        </Link>
        <div className=" flex items-center gap-8 text-xl">
          <ul className=" flex items-center gap-8 ">
            <li
              className="hover:rounded-lg hover:text-purple-800
                 hover:py-2 hover:px-3 underline-offset-2 hover:bg-slate-100 cursor-pointer duration-300"
            >
              <Link to="/">
              Home
              </Link>
            </li>
            <li
             className="hover:rounded-lg hover:text-purple-800
             hover:py-2 hover:px-3 underline-offset-2 hover:bg-slate-100 cursor-pointer duration-300"
            >
              Products
            </li>
            <li
             className="hover:rounded-lg hover:text-purple-800
             hover:py-2 hover:px-3 underline-offset-2 hover:bg-slate-100 cursor-pointer duration-300"
            >
              Categories
            </li>
            <li
             className="hover:rounded-lg hover:text-purple-800
             hover:py-2 hover:px-3 underline-offset-2 hover:bg-slate-100 cursor-pointer duration-300"
            >
             Offers
            </li>
            <li
             className="hover:rounded-lg hover:text-purple-800
             hover:py-2 hover:px-3  hover:bg-slate-100 cursor-pointer duration-300"
            >
              Sign in 
            </li>
          </ul>
          <Link to="./cart">
            <div className="relative">
            <HiOutlineShoppingCart className="absolute text-3xl "/>
            
              <span className="abolute ml-7 text-sm bg-red-700 text-white px-2 py-1 rounded-full ">
                {productData.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

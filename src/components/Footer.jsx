
import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-purple-900 text-gray-100 py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3">
      <Link to="/">
          <div className="flex text-3xl items-baseline mt-14 ">
          <FaShopify className="mr-2"/>
           <h1 > Modern Shop</h1>
          </div>
        </Link>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Faisal, Giza, Cairo</p>
            <p>Mobile: 01061774713</p>
            <p>Phone: 01100908859</p>
            <p>e-mail: dev.ahmed.hamdy.010@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              My account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;

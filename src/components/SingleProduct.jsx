import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shopSlice";
import { productsData } from "../api/Api";

const SingleProduct = () => {

  let [baseQuantity, setBaseQuantity] = useState(1)
  const dispatch = useDispatch()
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.productItem);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className=" w-full h-[500px] object-cover"
            src={details.image}
            alt=""
          />
          <div className=" absolute top-4 right-0">
            {details.isNew && (
              <p className=" bg-black text-white font-semibold px-6 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-base">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p
            className=" text-base to-gray-500 mt-3
          "
          >
            {details.description}
          </p>
          <div className="flex gap-6">
            <div className="w-52 flex items-center justify-between to-gray-500 gap-4 border p-3">
              <p className=" text-sm">Quantity</p>
              <div className="flex items-center font-semibold">
                <button onClick={()=>{
                  setBaseQuantity(baseQuantity===1?(baseQuantity=1):baseQuantity-1)
                }} className="border h-7 w-7 rounded-full text-lg px-2 hover:bg-purple-700 hover:text-white  flex items-center justify-center  cursor-pointer duration-300">
                  -
                </button>
                <span className="text-sm px-3">{baseQuantity}</span>
                <button onClick={()=>{
                  setBaseQuantity(baseQuantity+1)
                }} className="border h-7 w-7 rounded-full text-lg px-2 hover:bg-purple-700 hover:text-white  flex items-center justify-center  cursor-pointer duration-300">
                  +
                </button>
              </div>
            </div>
            <button onClick={() => {
                dispatch(
                  addToCart({
                    id: details.id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQuantity,
                    description: details.description,
                  })
                );
              }}  className="bg-black text-white py-3 px-6 active:bg-gray-800">
              Add to cart
            </button>
          </div>
          <p className=" text-base to-gray-500">Category: <span className=" capitalize font-medium"> {details.category}</span></p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

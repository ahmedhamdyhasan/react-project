import { useSelector } from "react-redux";

import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteItem, clearCartItems , increamentQuantity, decrementQuantity} from "../redux/shopSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shop.productsData);
  console.log(productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-6 mt-6
            "
            >
              <div className="flex items-center gap-2">
                {" "}
                <MdOutlineClose
                  onClick={() => {
                    dispatch(deleteItem(item.id));
                    console.log("deleted");
                  }}
                  className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                />
                <img
                  src={item.image}
                  alt="productImg"
                  className=" w-28 h-28 rounded-full object-cover"
                />
              </div>
              <h2 className="w-52">{item.title}</h2>
              <p className="w-16 text-xs">$ {item.price}</p>
             
              <div className="w-52 flex items-center justify-between text-gray-800 gap-4 border p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <span
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                    className="border h-7 w-7 rounded-full  text-lg   px-2 hover:bg-purple-700 hover:text-white cursor-pointer duration-300"
                  >
                   -    
                  </span>
                  {item.quantity}
                  <span
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                    className="border h-7 w-7 rounded-full text-lg flex items-center justify-center px-2 hover:bg-purple-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </span>
                </div>
              </div>
              <p className="w-14">${item.quantity * item.price}</p>
            </div>
          );
        })}
      </div>
      {productData.length >0 &&<button onClick={()=>{dispatch(clearCartItems())}} className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300">Clear Cart items</button>}
    <div className="mt-10">
      <Link className=" bg-purple-700 hover:bg-purple-900 py-2 px-3 text-lg text-white duration-300" to="/" >Go Shopping</Link>
      </div>
    </div>
   
  );
};

export default CartItem;

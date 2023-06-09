import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
const Cart = () => {
  const productData = useSelector((state) => state.shop.productsData);
  const [totalAmount, setTotalAmount] = useState('')

  useEffect(() => {
    let price =0
    productData.map((item)=>{
      price += item.price * item.quantity
      return price
    })
  setTotalAmount(price.toFixed(2))
   
  }, [productData])
  

  return (
    <div>
  

      <div className="max-w-screen-xl mx-auto py-20 flex gap-28">
      <CartItem />

      <div className="w-1/3 bg-gray-100 py-6 px-4 h-80 ">
        <div className="flex flex-col gap-6 border-b-2 border-b-gray-500 pb-6">
          <h2 className="text-2xl font-medium">Cart Total</h2>
          <p className="flex items-center text-base gap-4">
            Subtotal <span>$ {totalAmount}</span>
          </p>
          <p className="flex items-center text-base gap-4">
            Shipping{" "}
            <span>
              + 5%
            </span>
          </p>
        </div>
        <p className=" font-semibold flex justify-between my-8">
          Total <span className="text-xl font-bold">$ {(totalAmount *1.05).toFixed(2)}</span>
        </p>
        <button className=" shadow-lg text-xl bg-purple-800 h-10 text-white w-60 block mx-auto rounded-md hover:bg-purple-950 duration-300" >Proceed to Checkout</button>
      </div>
      </div>
    </div>
  );
};

export default Cart;

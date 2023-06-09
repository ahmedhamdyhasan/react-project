import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shopSlice";
const ProductItemCard = ({ productItem }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const id = productItem.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(id);
  const detailsHandler = () => {
    // console.log('clicked')
    navigate(`/product/${rootId}`, {
      state: {
        productItem,
      },
    });
  };
  // console.log(productItem)
  return (
    <div className="group relative rounded-lg">
      <div
        onClick={detailsHandler}
        className="  w-full mb-1 h-72 cursor-pointer overflow-hidden"
      >
        <img
          className="shadow-lg w-full h-full object-cover group-hover:scale-110 duration-300"
          src={productItem.image}
          alt=""
        />
      </div>

      <div className="bg-gray-100 w-full flex flex-row items-baseline justify-between px-3 py-3  ">
        <div>
          <div>
            <h2 className=" font-bold text-xl">
              {productItem.title.substring(0, 10)}
            </h2>
          </div>
          <div>
            <p className=" text-sm text text-gray-500">
              {productItem.category}
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className=" text-center text-lg font-semibold mb-2">
              ${productItem.price}
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: productItem.id,
                    title: productItem.title,
                    image: productItem.image,
                    price: productItem.price,
                    quantity: 1,
                    description: productItem.description,
                  })
                );
              }}
              className=" border-2 border-purple-700 bg-white py-1 px-2 textp text-purple-900 rounded-sm text-lg  hover:text-white  hover:bg-purple-800  cursor-pointer  duration-500"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;

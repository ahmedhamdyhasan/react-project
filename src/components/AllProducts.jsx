import ProductItemCard from "./ProductItemCard";

const AllProducts = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-3 mb-8 ">
        <h1 className=" text-2xl bg-purple-800 text-white py-2 w-80 text-center rounded-xl">
          All Products
        </h1>
        <p className="  text-lg text-gray-700 text-center">
          All you need is in one place
          <br /> Order Now ...
        </p>
      </div>
      <div
        id="products"
        className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-16"
      >
        {products.map((item) => {
          return <ProductItemCard key={item.id} productItem={item} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;

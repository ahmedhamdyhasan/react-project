import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import SingleProduct from "./components/SingleProduct";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { productsData } from "./api/Api";

const Layout = () => {
  return (
    <div className="font-bodyFont bg-gradient-to-r from-purple-100 to-sky-100">
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./Components/Home/Home.jsx";
import Category from "./Components/Category/Category.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Brands from "./Components/Brands/Brands.jsx";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Signup from "./Components/Signup/Signup.jsx";
import Products from "./Components/Products/Products.jsx";
import Login from "./Components/Signin/Signin.jsx";
import Logout from "./Components/Logout/Logout.jsx";
import UserContextProvider from "./Context/UserContext.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";
import CartContextProvider, { CartContext } from "./Context/CartContext.jsx";
import { Toaster } from "react-hot-toast";
import WishList from "./Components/WishList/WishList.jsx";
import WishContextProvider from "./Context/WishContext.jsx";
import { Provider } from "react-redux";
import CheckOut from "./Components/CheckOut/CheckOut.jsx";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword.jsx";
import VerifyPassword from "./Components/VerifyPassword/VerifyPassword.jsx";
import NewPassword from "./Components/NewPassword/NewPassword.jsx";
import Allorders from "./Components/AllOrders/AllOrders.jsx";


function App() {
  let rout = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              {" "}
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "Wishlist",
          element: (
            <ProtectedRoute>
              {" "}
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "category",
          element: (
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "productDetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoute>
              <Allorders/>
            </ProtectedRoute>
          ),
        },
        { path: "signup", element: <Signup /> },
        { path: "forgetpassword", element: <ForgetPassword /> },
        { path: "verify", element: <VerifyPassword /> },
        { path: "newpassword", element: <NewPassword /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <CartContextProvider>
        <WishContextProvider>
          <UserContextProvider>
              <RouterProvider router={rout}></RouterProvider>
          </UserContextProvider>
          <Toaster />
        </WishContextProvider>
      </CartContextProvider>

      {/* <Parent/> */}
      {/* <About/> */}
      {/* <Contact/> */}
    </>
  );
}

export default App;

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./productStyle.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Wishcontext } from "../../Context/WishContext";

export default function FeatureProducts() {
  const [loading, setLoading] = useState(null);
  // const [heart, setHeart] = useState(second)
  let { addProductWishlist,WishDelete } = useContext(Wishcontext);

  async function WishDeleteProduct(productid) {

    setLoading(true);
   let response = await WishDelete(productid);

   console.log(response ,"description delete");
   setWishData(response.data.data);
   setLoading(false);
   
 }


  async function wishProduct(productId) {
    setLoading(true);
    let response = await addProductWishlist(productId);
    setLoading(false);

    console.log(response);
  }

  let { addProductCart } = useContext(CartContext);
  async function addInCart(productId) {
    setLoading(true);
    let response = await addProductCart(productId);
    setLoading(false);

    console.log(response);
  }

  const [products, setProducts] = useState([]);

  async function homeProduct() {
    setLoading(true);
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setProducts(data.data);
    setLoading(false);
    console.log(data.data);
  }

  useEffect(() => {
    homeProduct();
  }, []);
  return (
    <>
      {/* productDetails */}
      {loading ? (
        <Loader />
      ) : (
        <section
          id="Projects"
          className="w-full mx-auto grid grid-cols- xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className=" productss md:w-full bg-white shadow-md rounded-xl duration-500 hover:bg-green-200 hover:scale-105 hover:shadow-xl"
            >
              <Link to={`/productDetails/${product.id}`}>
                <div className="cursor-pointer ">
                  <img
                    src={product.imageCover}
                    alt="Product"
                    className="h-80 p-2 w-full object-cover rounded-t-xl"
                  />
                  <div className="px-5 a py-3 w-full">
                    <span className="text-green-600 font-bold font-sans mr-3   uppercase text-xs">
                      {product.category.name}
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      {product.title.split(" ").slice(0,2).join(" ")}
                    </p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black cursor-auto my-3">
                        {product.price}EGP
                      </p>

                      <div className="ml-auto pt-1 flex">
                        <i className="fa fa-star text-yellow-300 pt-1 px-1"></i>
                        <span className="">{product.ratingsAverage}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex justify-center   btn-card py-3">
                <button
                  onClick={() => addInCart(product.id)}
                  className="bg-green-500 btnn text-white rounded-md px-7 py-2 me-4 mb-4"
                >
                  Add to cart
                </button>
                <button onClick={()=>wishProduct(product.id)} className="mx-1 mb-4 text-red-600 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

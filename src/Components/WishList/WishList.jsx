import React, { useContext, useEffect, useState } from 'react'
import { Wishcontext } from '../../Context/WishContext';
import Loader from '../Loader/Loader';
import { CartContext } from '../../Context/CartContext';
export default function WishList() {


  let { WishDisplay,WishDelete } = useContext(Wishcontext);
  const [wishData, setWishData] = useState([])
  const [wishDeletee, setWishDeletee] = useState([])
const [loading, setLoading] = useState(null)
  async function getWishList() {
    setLoading(true);
    let response = await WishDisplay();
    console.log(response.data.data, "description");
    setWishData(response.data.data);
    setLoading(false);
  }
  console.log(wishData ,"description showing data");

  async function WishDeleteProduct(productid) {

     setLoading(true);
    let response = await WishDelete(productid);
    setLoading(false);
    setLoading(true);

    getWishList()
    setLoading(false);

    console.log(response);
    // console.log(response.data.data ,"description delete");
    // setWishDeletee(response.data.data)
    // console.log(response ,"description delete");
    // getWishList()
    
  }

  let { addProductCart } = useContext(CartContext);
  async function addInCart(productId) {
    setLoading(true);
    let response = await addProductCart(productId);
    setLoading(false);

    console.log(response);
  }

  useEffect(() => {
    getWishList()
  }, [])
  




  return (
    <>
   {loading?<Loader/>:<section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {wishData.map((item,index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img
                          className="h-48 w-48 dark:hidden"
                          src={item.imageCover}
                          alt="imac image"
                        />
                      </a>
                      <label htmlFor="counter-input" className="sr-only">
                        Choose quantity:
                      </label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                       


                          
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">
                            {item.price}EGP
                          </p>
                        </div>
                      </div>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md py-5">
                        <a
                          href="#"
                          className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                        >
                          {item.title}
                        </a>
                        <a
                          href="#"
                          className="text-base font-medium block text-gray-900 hover:underline dark:text-white"
                        >
                          {item.description.split(" ").slice(0,2).join(" ")}
                        </a>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => WishDeleteProduct(item.id)}
                            
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                          <button
                            onClick={() => addInCart(item.id)}
                            
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>}
    
    </>
  )
}

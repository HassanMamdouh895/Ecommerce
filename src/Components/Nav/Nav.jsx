import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { Usercontext } from "../../Context/UserContext";
export default function Nav() {

  
  let navigator=useNavigate()
  let {userData,setUserData}= useContext(Usercontext)
  function logOut(){
    //3 
    localStorage.removeItem("userToken")
    setUserData(null)
    navigator("/login")
    
  }
  return (
    <>
        <nav className="container mx-auto bg-white z-50 sticky left-0 right-0 top-0 border-gray-200 dark:bg-gray-900">
          <div className="mx-2 max-w-screen-xl flex flex-wrap items-center  py-4">
            <Link
              to=""
              className="flex items-center  px-4 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} alt="hello" />
            </Link>
            <div className="flex md:order-2 space-x-3 ms-auto   md:space-x-0 rtl:space-x-reverse">
              {userData?<a className="hidden md:block" onClick={()=>logOut()}>
              <button
              type="button"
                
                className="mx-2 text-white bg-green-700   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
              </a>:<>
              
              <Link to='login'>
              <button
                type="button"
                
                className="mx-2 hidden md:block text-white bg-green-700   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              </Link>
              <Link to='signup'>
              <button
                type="button"
                
                className="mx-2 text-white hidden md:block bg-green-700   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                Signup
              </button>
              
              </Link>
              </>}
              
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="me-10 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden ps-2 w-full md:block md:w-auto" id="navbar-sticky" >
               <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
               {userData ?
               <>
                <li>
                  <Link
                    to=""
                    className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="cart"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="Wishlist"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    to="category"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    category
                  </Link>
                </li>
                <li>
                  <Link
                    to="brands"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    brands
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    products
                  </Link>
                </li>
                <a className="block md:hidden text-center" onClick={()=>logOut()}>
              <button
              type="button"
                
                className="mx-2  text-white bg-green-700   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
              </a>
                </>:<>
                <Link className="text-center" to='login'>
              <button
                type="button"
                
                className="mx-2 my-2 text md:hidden text-white bg-green-700   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              </Link>
              <Link className="text-center" to='signup'>
              <button
                type="button"
                
                className="mx-2 text-white md:hidden bg-green-700   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                Signup
              </button>
              
              </Link>
                </>}
              </ul>
            </div>
          </div>
        </nav>
     
    </>
  );
}


import React, { useContext, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../Context/CartContext";
export default function CheckOut() {
  const [loading, setLoading] = useState(false);
//   let {checkout}=useContext(CartContext)
  let {checkOut}=useContext(CartContext)
  let formik = useFormik({
    initialValues: {
        details: "",
        phone: "",
        city: "",
    },
    onSubmit: (values)=>{
         PayOnline(values)
        
    },
  });
async function PayOnline(values) {

    await checkOut(values)
    
}
  return (
    <>
      <div className="container w-3/6 py-10 mx-auto">
        <h1 className=" text-green-500 text-2xl">CheckOut Now</h1>
        <form onSubmit={formik.handleSubmit}>
          
          <div className="my-2">
            <label
              htmlFor="details"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              details:
            </label>
            <input
              name="details"
              type="text"
              id="details"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City:
            </label>
            <input
              name="city"
              type="text"
              id="city"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.city}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            />
             <label
              htmlFor="phone"
              className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone:
            </label>
            <input
              name="phone"
              type="tel"
              id="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            />
            
          </div>
          
          <div className="text-center">
        
              <button
                type="submit"
                className="bg-green-500 rounded-md text-white px-5 mt-2 py-2"
              >
                CheckOut
              </button>
        
          </div>
        </form>
      </div>
    </>
  );
}

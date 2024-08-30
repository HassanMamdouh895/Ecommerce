import React, { useState } from 'react'
import { Formik, useFormik } from "formik";
import { useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
    let navigate = useNavigate()
    let [em, setem] = useState("")
    let formik = useFormik({
        initialValues: {
            email:''
        },
        onSubmit: (values)=>{
            // console.log(values);
            setem(values)
            emailConfirme(values)
            // console.log(values)
            
        },
      });
    async function emailConfirme(values) {


        // setem(values)
        // console.log(typeof(em))
        
      let x =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{email:values.email})
      navigate('/Verify');
      


        console.log(x)
    }
      return (
        <>
          <div className="container w-3/6 py-10 mx-auto mt-20">
            <h1 className=" text-green-500 text-2xl">Reset Password Account</h1>
            <form onSubmit={formik.handleSubmit}>
              
              <div className="my-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter your email :
                </label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                />
              </div>
              
              
              <div className="text-center">
            
                  <button
                    type="submit"
                    className="bg-green-500 rounded-md text-white px-5 mt-2 py-2"
                  >
                    Confirme
                  </button>
            
              </div>
            </form>
          </div>
        </>
      );
}

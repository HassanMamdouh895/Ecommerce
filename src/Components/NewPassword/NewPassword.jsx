import React, { useState } from 'react'
import { Formik, useFormik } from "formik";
import { useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewPassword() {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            email:'',
            newPassword:''
        },
        onSubmit: (values)=>{
            // console.log(values);
            // setem(values)
            NewPassword(values)
            // console.log(values)
            
        },
      });
    async function NewPassword(values) {


        console.log(values)
        
      let x =  await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,{
        email: values.email ,
        newPassword: values.newPassword,
    })
    console.log(x)

      navigate('/signin');
      


    }
      return (
        <>
          <div className="container w-3/6 py-10 mx-auto">
            <h1 className=" text-green-500 text-2xl">Reset Password Account</h1>
            <form onSubmit={formik.handleSubmit}>
              
              <div className="my-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  email:
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="newPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password:
                </label>
                <input
                  name="newPassword"
                  type="password"
                  id="newPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
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
import React, { useState } from 'react'
import { Formik, useFormik } from "formik";
import { useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function VerifyPassword() {
    let navigate = useNavigate()
    // let [em, setem] = useState("")
    let formik = useFormik({
        initialValues: {
            Verify:''
        },
        onSubmit: (values)=>{
            // console.log(values);

            VerifyConfirme(values)
            // console.log(values)
            
        },
      });
    async function VerifyConfirme(values) {


        // setem(values)
        // console.log(typeof(em))
        
      let x =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,{resetCode:values.Verify})
      navigate('/newpassword');
      


        console.log(x)
    }
      return (
        <>
          <div className="container w-3/6 py-10 mx-auto">
            <h1 className=" text-green-500 text-2xl">Reset Password Account</h1>
            <form onSubmit={formik.handleSubmit}>
              
              <div className="my-2">
                <label
                  htmlFor="Verify"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Verify:
                </label>
                <input
                  name="Verify"
                  type="text"
                  id="Verify"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Verify}
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




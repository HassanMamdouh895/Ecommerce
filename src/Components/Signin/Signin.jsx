
import React, { useContext, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Usercontext } from "../../Context/UserContext";
export default function Login() {
  let {setUserData}=useContext(Usercontext)
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const [apiError, setApiError] = useState(null);
  async function Login(values) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        values
      );
      console.log(data);
      localStorage.setItem("userToken", data.token);
      navigate('/');
      setUserData(data.token)
      setLoading(false);
    } catch (err) {
      setApiError(err.response.data.message);
      console.log(err.response.data.message);
      setLoading(false);
    }
  }
  let mySchema = Yup.object({
    email: Yup.string().required("email is required").email("invalid email"),
    password: Yup.string()
      .required("pass is req")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password minimum 8 characters, at least one letter and one number"
      )
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: mySchema,
    onSubmit: Login,
  });

  return (
    <>
      <div className="container w-3/6 py-10 mx-auto">
        <h1 className=" text-green-500 text-2xl">Login Now</h1>
        <form onSubmit={formik.handleSubmit}>
          {apiError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{apiError}</span>
            </p>
          )}
          <div className="my-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email:
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
            {formik.touched.email && formik.errors.email ? (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{formik.errors.email}</span>
              </p>
            ) : null}
          </div>
          <div className="my-2">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password:
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{formik.errors.password}</span>
              </p>
            ) : null}
          </div>
          
          <div className="text-center my-10 flex flex-wrap flex-col">
          
            {loading ? (
              <button
                className="bg-green-500 rounded-md text-white px-5 mx-1 mt-2 py-2"
              >
                <i className="fas fa-spinner fa-spin-pulse"></i>
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 rounded-md text-white px-5 mt-2 py-2"
              >
                Login
              </button>
            )}
            <Link to ='/forgetpassword'
                className="bg-green-500 rounded-md mx-2  text-white px-10  mt-5 py-2"
              >
                Forget Password
              </Link>

          </div>
        </form>
      </div>
    </>
  );
}

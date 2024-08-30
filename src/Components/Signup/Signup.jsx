import React, { useContext, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "../../Context/UserContext";

export default function Signup() {
  let {setUserData} =useContext(Usercontext)
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const [apiError, setApiError] = useState(null);
  async function register(values) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      );
      
      console.log(data);
      localStorage.setItem("userToken", data.token);
      navigate('/login');
      // setUserData(data.token)
      setLoading(false);

    } catch (err) {
      setApiError(err.response.data.message);
      console.log(err.response.data.message);
      setLoading(false);
    }
  }
  let mySchema = Yup.object({
    name: Yup.string()
      .required("Name is Required")
      .min(3, "cant be less than 3 chars")
      .max(10, "max is 10 charcter"),
    email: Yup.string().required("email is required").email("invalid email"),
    password: Yup.string()
      .required("pass is req")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password minimum 8 characters, at least one letter and one number"
      ),
    rePassword: Yup.string()
      .required("repass is required")
      .oneOf([Yup.ref("password")], "password not matched"),
    phone: Yup.string()
      .required()
      .matches(/^(002)?01[0125][0-9]{8}$/, "phone is not valid"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: mySchema,
    onSubmit: register,
  });

  return (
    <>
      <div className="container w-3/6 py-10 mx-auto">
        <h1 className=" text-green-500 text-2xl">Register Now</h1>
        <form onSubmit={formik.handleSubmit}>
          {apiError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{apiError}</span>
            </p>
          )}
          <div className="my-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name:
            </label>
            <input
              name="name"
              type="text"
              id="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            />

            {formik.touched.name && formik.errors.name ? (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{formik.errors.name}</span>
              </p>
            ) : null}
          </div>

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
          <div className="my-2">
            <label
              htmlFor="rePassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirme Password :
            </label>
            <input
              name="rePassword"
              type="password"
              id="rePassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.rePassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            />
            {formik.touched.rePassword && formik.errors.rePassword ? (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{formik.errors.rePassword}</span>
              </p>
            ) : null}
          </div>
          <div className="my-2">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            {formik.touched.phone && formik.errors.phone ? (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{formik.errors.phone}</span>
              </p>
            ) : null}
          </div>
          <div className="text-end">
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
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

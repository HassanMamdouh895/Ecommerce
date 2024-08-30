import axios from "axios";
import React, { useEffect, useState } from "react";
import NotFound from "../NotFound/NotFound";
import Loader from "../Loader/Loader";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainCategory from "../MainCategory/MainCategory";

// here create function  api

export default function Home() {
  // const [product, setProduct] = useState([]);
  // const [loader, setloader] = useState(true);
  // async function apidata() {
  //   let { data } = await axios.get(
  //     `https://ecommerce.routemisr.com/api/v1/products`
  //   );
  //   console.log(data.data);
  //   setProduct(data.data);
  // }

  // useEffect(() => {
  //   apidata();
  // }, []);
  return (
    <>
      <MainCategory />
      <CategorySlider />
      <FeatureProducts />
    </>
  );
}

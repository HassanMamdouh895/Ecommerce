import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

export default function Brands() {
  const [loader, setLoader] = useState(null);
  const [brand, setBrand] = useState([]);
  async function Brandapi() {
    setLoader(true);
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/brands`
    );
    setBrand(data.data);
    // console.log(data.data);
    setLoader(false);
  }

  useEffect(() => {
    Brandapi();
  }, []);

  return (
    <>
      {loader? <Loader />: (
        <section
          id="Projects"
          className="w-full mx-auto grid grid-cols- xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {brand.map((brand, index) => (
            <div
              key={brand._id}
              className=" md:w-full border border-solid bg-white shadow-md rounded-xl duration-500 hover:bg-green-200 hover:scale-105 hover:shadow-xl"
            >
              <div className="cursor-pointer">
                <img
                  src={brand.image}
                  className="h-80 p-2 w-full  rounded-t-xl"
                />
                <div className="px-5 text-center py-6 w-full">
                  <span className="text-green-600 font-bold font-sans mr-3   uppercase text-xl">
                    {brand.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) }
    </>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
export default function Category() {
  const [loading, setLoading] = useState(null);
  const [api, setApi] = useState([]);
  async function categoyApi() {
    setLoading(true);
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories`
    );
    //null saftey
    setApi(data.data);
    setLoading(false);
    console.log(data.data)
  }

  useEffect(() => {
    categoyApi();
  }, []);

  return (
    <>
      {loading?<Loader />: (
        <section
          id="dd"
          className="w-full mx-auto grid grid-cols- xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {api.map((cat) => (
            <div
              key={cat._id}
              className=" md:w-full bg-white shadow-md rounded-xl duration-500 hover:bg-green-200 hover:scale-105 hover:shadow-xl"
            >
              <div className="cursor-pointer">
                <img
                  src={cat.image}
                  className="h-80 p-2 w-full object-cover rounded-t-xl"
                />
                <div className="px-5 text-center py-6 w-full">
                  <span className="text-green-600 font-bold font-sans mr-3   uppercase text-xl">
                    {cat.name}
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

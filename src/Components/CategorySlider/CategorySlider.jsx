import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategorySlider() {
  const [catData, setCatData] = useState([])
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000
      };

    async function getCatSlider() {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`).then((response)=>{
          console.log(response.data.data)
          setCatData(response.data.data)
          console.log('datahello',catData);
          
      }).catch((error)=>{
          console.log(error);
          
          return error
          
      })

       
    }

    useEffect(() => {
      getCatSlider()
    
      
    }, [])
    
  return (
    <>
      <div className='container mx-auto py-10'>
        <h1 className='my-1'>Show Populer Category :</h1>
        <Slider {...settings}>
        {catData.map((cat)=> <div className='text-center '>
          <img className='h-[200px] w-[200px]' src={cat.image} alt="" />
          <p className='text-center'>{cat.name}</p>
        </div>)}
        </Slider>
      </div>
    </>
  )
}

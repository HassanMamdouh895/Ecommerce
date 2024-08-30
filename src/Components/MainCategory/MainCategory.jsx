import React from 'react'
import Slider from "react-slick";

import slider1 from "./../../assets/slider-image-1.jpeg";
import slider2 from "./../../assets/slider-image-2.jpeg";
import slider3 from "./../../assets/slider-image-3.jpeg";
import slider4 from "./../../assets/grocery-banner-2.jpeg";
import slider5 from "./../../assets/grocery-banner.png";
export default function MainCategory() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
    <div className='container mx-auto my-10'>
      <div className='flex'>
        <div className='w-3/4'>
        <Slider {...settings}>
          <img src={slider5} className='h-[300px]' alt="sliderimage" />
          <img src={slider3} alt="sliderimage" className='h-[300px]'  />
          <img src={slider4} alt="sliderimage" className='h-[300px]'  />
        </Slider>
        </div>
        

        <div className='w-1/4'>
        <img src={slider2} alt="sliderimage" className='h-[150px]'  />
        <img src={slider1} alt="sliderimage" className='h-[150px]'  />

        </div>
      </div>
    </div>
      
    </>
  )
}

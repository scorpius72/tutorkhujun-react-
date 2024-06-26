import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DivisionSlickSlider.scss'; // Import your CSS file for component styling

function DivisionSlickSlider() {
  
  const divisionObj = [
    {
        name:'Dhaka',
        cnt: 12
    },
    {
        name:'Barishal',
        cnt: 14
    },
    {
        name:'Chattogram',
        cnt: 11
    },
    {
        name:'Khulna',
        cnt: 15
    },
    {
        name:'Rajshahi',
        cnt: 30
    },
    {
        name:'Rangpur',
        cnt: 11
    },
    {
        name:'Mymensingh',
        cnt: 12
    },
    {
        name:'Sylhet',
        cnt: 50
    },
  ];


  var settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    arrows: false ,

    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className="division-slider">
        {divisionObj.map((obj , i)=>{
            return (
                <div key={i} className="division-card">
                    <div className="division-card-content">
                        <span>{obj.name}: {obj.cnt}</span>
                    </div>
                </div>
            )
        })}
    </Slider>
  )
}

export default DivisionSlickSlider;

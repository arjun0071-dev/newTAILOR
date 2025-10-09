import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photo from "../../assets/testimonial.png";

function Testimonial() {
  const testimonials = [
    {
      img: photo,
      name: "Robart Brown",
      post: "Creative designer at Colorlib",
      description:
        "Brook presents your services with flexible, convenient and compose layouts. You can select your favorite layouts & elements with unlimited customization possibilities. Pixel-perfect replica of the designers’ intended presentation.",
    },
    {
      img: photo,
      name: "Robart Brown",
      post: "Creative designer at Colorlib",
      description:
        "Brook presents your services with flexible, convenient and compose layouts. You can select your favorite layouts & elements with unlimited customization possibilities. Pixel-perfect replica of the designers’ intended presentation.",
    },
    {
      img: photo,
      name: "Robart Brown",
      post: "Creative designer at Colorlib",
      description:
        "Brook presents your services with flexible, convenient and compose layouts. You can select your favorite layouts & elements with unlimited customization possibilities. Pixel-perfect replica of the designers’ intended presentation.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

return (
  <div className="w-[90%] sm:w-4/5 md:w-4/5 mx-auto px-2 sm:px-4 py-6 sm:py-8  rounded-lg">
    <Slider {...settings}>
      {testimonials.map((val, i) => (
        <div key={i} className="p-2 sm:p-4">
          <p className="text-gray-600 text-xs sm:text-sm md:text-lg text-center">
            {val.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="w-[60px] sm:w-[80px] md:w-[92px]">
              <img
                src={val.img}
                alt={val.name}
                className="w-full rounded-full"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-sm sm:text-base md:text-lg">{val.name}</p>
              <p className="font-light text-xs sm:text-sm md:text-base">{val.post}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);}

export default Testimonial;


import React from 'react'
import new1 from "../../assets/h1_hero.png"
import photo from "../../assets/1.png"
import photo3 from "../../assets/hero.png"

function New(props) {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={new1}
        alt=""
        className="brightness-50 h-[300px] sm:h-[400px] md:h-[450px] w-full object-cover"
      />

      {/* Content Wrapper */}
      <div className="absolute top-0 flex flex-col md:flex-row mx-5 md:mx-20 lg:mx-32 h-full gap-5 md:gap-10 lg:gap-20 items-center justify-center">
        
        {/* Left Section */}
        <div className="text-white w-full md:w-1/2 text-center md:text-left">
          <div>
            <img
              src={photo}
              alt="photo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-fit object-cover"
            />
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-3">
            {props.title}
          </div>
        </div>

        {/* Right Section (hidden in mobile) */}
        <div className="hidden md:block right-0 mt-5 md:mt-20">
          <img
            src={photo3}
            alt="photo"
            className="w-10/12 md:w-11/12 h-56 sm:h-60 md:h-65 lg:h-80 rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default New
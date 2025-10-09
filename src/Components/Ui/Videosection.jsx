import React from 'react'
import video from "../../assets/video.png"
import play from "../../assets/play.png"

function Videosection() {
  return (
    <div className="relative flex justify-center items-center">
    
      <img 
        src={video} 
        alt="video thumbnail" 
        className="w-full h-auto object-cover rounded-xl" 
      />

      
      <div className="
        absolute 
        flex justify-center items-center
        opacity-90 shadow-md rounded-full cursor-pointer
        bg-text
        sm:w-16 sm:h-16 
        md:w-24 md:h-24 
        lg:w-32 lg:h-32
      ">
        <img 
          src={play} 
          alt="play button" 
          className="w-1/2 h-1/2 object-contain"
        />
      </div>
    </div>
  )
}

export default Videosection

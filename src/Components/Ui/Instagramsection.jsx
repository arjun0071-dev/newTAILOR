import React from 'react'
import insta1 from "../../assets/instra1.png"
import insta2 from "../../assets/instra2.png"

function Instagramsection() {
  const images = [insta1, insta2]; // You can add more images

  return (
    <div className='flex flex-col items-center gap-10 px-4 sm:px-6 md:px-10 py-12 bg-gray-50'>
      
      {/* Section Title */}
      <div className='text-center'>
        <h2 className='text-3xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900'>
          Follow us on Instagram
        </h2>
        <p className='text-sm sm:text-base md:text-lg text-gray-600 mx-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
      </div>

      {/* Instagram Images */}
      <div className='flex flex-wrap justify-center gap-6 sm:gap-6 md:gap-7'>
        {images.map((img, index) => (
          <div 
            key={index} 
            className='overflow-hidden rounded-2xl w-48 sm:w-52 md:w-56 lg:w-60 h-48 sm:h-52 md:h-56 lg:h-60 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl'
          >
            <img 
              src={img} 
              alt={`instagram-${index}`} 
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Instagramsection;

// import React from 'react'
// import about from "../../assets/visit_bg.png"

// function Abouthouse() {
//   return (
//     <div className="h-auto lg:h-fit flex flex-col lg:flex-row items-center lg:items-start px-5 md:px-10 lg:px-20 py-10 gap-10 bg-">
      
      
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <img 
//           src={about} 
//           alt="photo" 
//           className="w-full md:w-4/5 lg:w-full rounded-xl object-cover"
//         />
//       </div>

      
//       <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
//         <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left">
//           About our <br className="hidden md:block"/> tailor house
//         </div>

//         <div className="space-y-4 text-blue-900 text-sm md:text-base lg:text-lg text-center lg:text-left">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
//           </p>
//         </div>

//         <div className="flex justify-center lg:justify-start">
//           <button className="mt-5 w-fit px-6 py-3 text-white rounded-2xl font-semibold bg-bg hover:bg-blue-700 transition-all duration-300">
//             More About Us
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Abouthouse

import React from "react";
import about from "../../assets/visit_bg.png";

function Abouthouse() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 px-5 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={about}
          alt="About Tailor House"
          className="w-full md:w-4/5 lg:w-full rounded-2xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center lg:text-left">
          About Our <br className="hidden md:block" /> Tailor House
        </h2>

        {/* Description */}
        <div className="space-y-4 text-blue-800 text-base md:text-lg text-center lg:text-left">
          <p>
            We are dedicated to creating custom-tailored clothing with precision and style. Our team of experts ensures the perfect fit every time.
          </p>
          <p>
            Our tailor house combines tradition with modern design, providing garments that are both elegant and comfortable. Experience craftsmanship like never before.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-3xl hover:bg-blue-700 shadow-lg transition-all duration-300">
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Abouthouse;

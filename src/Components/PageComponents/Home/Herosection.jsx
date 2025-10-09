// import React from 'react'
// import photo from "../../../assets/1.png"
// import photo1 from "../../../assets/2.png"
// import photo2 from "../../../assets/3.png"

// function Herosection() {
//   return (
//     <div className="relative w-full">
      
//       <img
//         src={photo1}
//         alt="photo"
//         className="brightness-50 w-full h-[70vh] object-cover sm:h-[80vh] md:h-screen"
//       />

      
//       <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        
        
//         <div className="text-white w-full md:w-1/2 text-center md:text-left">
          
//           <div className="">
//             <img
//               src={photo}
//               alt="photo"
//               className="w-fit object-cover h-19 animate-spin [animation-duration:10s]"
//             />
//           </div>

         
//           <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
//             We make clothes that suit you
//           </div>

          
//           <div className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base lg:text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Suspendisse varius enim in eros elementum tristique. Duis
//             cursus, mi quis viverra ornare.
//           </div>

         
//           <div className="flex justify-center md:justify-start">
//             <button className="mt-6 sm:mt-10 px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl font-semibold bg-bg cursor-pointer text-sm sm:text-base">
//               Our Services
//             </button>
//           </div>
//         </div>

      
//         <div className="hidden md:flex justify-center items-center w-1/2">
//           <img
//             src={photo2}
//             alt="photo"
//             className="w-3/4 lg:w-4/5 rounded-xl lg:rounded-2xl h-1/2 md:h-2/3 object-cover shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Herosection

import React from "react";
import photo from "../../../assets/1.png";
import photo1 from "../../../assets/2.png";
import photo2 from "../../../assets/3.png";

function Herosection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={photo1}
        alt="Background"
        className="w-full h-full object-cover brightness-50"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
        {/* Left Text Section */}
        <div className="text-white w-full md:w-1/2 text-center md:text-left space-y-4">
          {/* Spinning Logo */}
          <div className="mx-auto md:mx-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
            <img
              src={photo}
              alt="Logo"
              className="w-full h-full object-cover animate-spin-slow"
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            We Make Clothes That Suit You
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 animate-fade-in delay-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button className="mt-4 sm:mt-6 px-6 sm:px-10 py-2 sm:py-4 rounded-2xl font-semibold bg-blue-600 hover:bg-blue-700 transition text-white text-sm sm:text-base">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-center items-center w-1/2 mt-8 md:mt-0">
          <img
            src={photo2}
            alt="Showcase"
            className="w-3/4 lg:w-4/5 rounded-2xl h-auto object-cover shadow-2xl animate-fade-in"
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 20s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-fade-in {
            opacity: 0;
            animation: fadeIn 1.2s forwards;
          }
          .animate-fade-in.delay-200 {
            animation-delay: 0.2s;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default Herosection;

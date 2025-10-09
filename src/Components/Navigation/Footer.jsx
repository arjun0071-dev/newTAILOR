// import React from 'react'
// import logo from "../../assets/logo.png"
// import face from "../../assets/facebook.png"
// import insta from "../../assets/insta.png"
// import link from "../../assets/link.png"
// import x from "../../assets/x.png"
// import footer from "../../assets/footer-bg.png"

// function Footer() {
//   return (
//     <div className=" bg-gray-700">
     
    

    
//       <div className="xtop-0 left-0 w-full bg-gray-900 text-white px-6 sm:px-10 md:px-16 lg:px-24 py-10 flex flex-col lg:flex-row justify-between gap-12">
        
       
//         <div className="flex flex-col gap-8 max-w-[350px]">
//           <div>
//             <img src={logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
//           </div>
//           <div className="flex flex-col gap-6">
//             <div className="text-xl sm:text-2xl font-bold text-text">
//               Subscribe to Newsletter
//             </div>
//             <div className="flex flex-col gap-4">
//               <input 
//                 type="email" 
//                 placeholder="Email"  
//                 className="text-base sm:text-lg md:text-xl bg-transparent border-b border-gray-400 outline-none placeholder-white py-2"
//               /> 
//               <button className="mt-4 w-fit px-6 py-3 bg-bg text-white rounded-xl font-semibold cursor-pointer hover:opacity-90">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

       
//         <div className="flex flex-col sm:flex-row gap-12">
          
          
//           <div className="flex flex-col gap-6 w-full sm:w-[220px]">
//             <div className="text-xl sm:text-2xl font-bold text-bg">
//               Contact
//             </div>
//             <div className="flex flex-col gap-4 text-sm sm:text-base">
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
//               <p>(80) 783 367-3904</p>
//               <div className="flex gap-4 mt-2">
//                 <img src={face} alt="Facebook" className="w-7 h-7 hover:scale-110 transition-transform" />
//                 <img src={insta} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
//                 <img src={x} alt="X" className="w-6 h-6 hover:scale-110 transition-transform" />
//                 <img src={link} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
//               </div>
//             </div>
//           </div>

          
//           <div className="flex flex-col gap-6">
//             <div className="text-xl sm:text-2xl font-bold text-bg">
//               Our Solutions
//             </div>
//             <div className="flex flex-col gap-3 text-sm sm:text-base">
//               <a href="#">Home</a>
//               <a href="#">Services</a>
//               <a href="#">Blog</a>
//               <a href="#">Contact</a>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react'
import logo from "../../assets/logo.png"
import face from "../../assets/facebook.png"
import insta from "../../assets/insta.png"
import link from "../../assets/link.png"
import x from "../../assets/x.png"
import footer from "../../assets/footer-bg.png"

function Footer() {
  return (
    <footer 
      className="relative text-white"
      style={{ backgroundImage: `url(${footer})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Logo + Newsletter */}
        <div className="flex flex-col gap-8">
          <img src={logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Subscribe to Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"  
                className="flex-1 bg-transparent border-b border-gray-400 outline-none placeholder-gray-300 py-2 text-sm sm:text-base"
              /> 
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <p className="text-gray-200 font-medium mb-4">(80) 783 367-3904</p>
          <div className="flex gap-5">
            <img src={face} alt="Facebook" className="w-7 h-7 hover:scale-110 transition-transform cursor-pointer" />
            <img src={insta} alt="Instagram" className="w-7 h-7 hover:scale-110 transition-transform cursor-pointer" />
            <img src={x} alt="X" className="w-7 h-7 hover:scale-110 transition-transform cursor-pointer" />
            <img src={link} alt="LinkedIn" className="w-7 h-7 hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-6">Our Solutions</h3>
          <ul className="flex flex-col gap-3 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-600 mt-10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Logout() {
//   const navigate = useNavigate();

//   const Yes = () => {
//     localStorage.removeItem("access_token");
//     navigate("/");
//   };

//   const No = () => {
//     navigate("/home");
//   };

//   useEffect

//   return (
//     <div className="h-screen flex flex-col justify-center items-center gap-4">
//       <div className="text-xl font-semibold">
        
//         Are you sure you want to logout?


//       </div>

//       <div className="flex gap-4">
//         <button 
//           onClick={Yes} 
//           className="px-4 py-2 bg-red-500 text-white rounded"
//         >
//           Yes
//         </button>

//         <button 
//           onClick={No} 
//           className="px-4 py-2 bg-gray-300 rounded"
//         >
//           No
//         </button>
        
//       </div>
//     </div>
//   );
// }

// export default Logout;


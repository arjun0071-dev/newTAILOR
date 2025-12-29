// import React from "react";
// import { Formik, Form, Field } from "formik";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const fields = [
//   { name: "email",label:"email", type: "email", placeholder: "Email" },
//   { name: "password", type: "password",label:"password" ,placeholder: "Password" },
// ];

// function Login() {

//   const navigate = useNavigate()
//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         onSubmit={async (values , {resetForm}) => {
//           try {
//             const response = await axios.post("http://192.168.1.91:3000/auth/login" , values);
//             localStorage.setItem("access_token" , response.data.access_token)
//             resetForm()
//             navigate("/home")
//           } catch (error) {
//             console.log(error)
//           }
//         }}
//       >
//         <Form className="bg-white p-6 rounded-xl shadow-lg w-80 flex flex-col gap-4">



//           <h2 className="font-semibold text-center text-2xl mb-2">Login Page</h2>

//           {fields.map((val,index) => (
//           <div key={index}>
//             <label className="  text-gray-800" >{val.label}</label>
//              <Field
//               key={val.name}
         
//               name={val.name}
//               type={val.type}
//               placeholder={val.placeholder}
//               className="border p-2 rounded w-full"
//             />
//           </div>
//           ))}

//           <button
//             type="submit"
//             className="bg-black text-white py-2 rounded hover:bg-blue-700"
//           >
//             Login
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default Login;

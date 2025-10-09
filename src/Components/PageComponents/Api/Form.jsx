import React, { useState } from "react";
import { motion } from "framer-motion";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Email is invalid";
    if (!formData.number) errs.number = "Number is required";
    else if (formData.number.length < 8) errs.number = "Number must be at least 8 digits";
    if (!formData.password) errs.password = "Password is required";
    else if (formData.password.length < 6) errs.password = "Password must be at least 6 characters";
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({ name: "", email: "", number: "", password: "" });
    }
  };

  const inputFields = [
    { type: "text", name: "name", placeholder: "Enter your name" },
    { type: "email", name: "email", placeholder: "Enter your email" },
    { type: "number", name: "number", placeholder: "Enter your number" },
    { type: "password", name: "password", placeholder: "Enter your password" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
    
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col gap-8 shadow-2xl p-10 rounded-3xl w-full max-w-2xl bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-800"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-extrabold text-center text-white tracking-wide"
        >
           Registration
        </motion.h2>
        <p className="text-gray-300 text-center text-sm">
          Fill in the details to create your premium account
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          {inputFields.map((field, index) => (
            <div key={index} className="w-full sm:w-[48%] flex flex-col">
              <motion.input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`h-12 w-full border rounded-xl p-3 transition-all duration-200 ${
                  errors[field.name]
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-400 focus:ring-green-400"
                } focus:outline-none focus:ring-2 bg-gray-900 text-white placeholder-gray-400`}
              />
              {errors[field.name] && (
                <span className="text-red-400 text-xs mt-1">{errors[field.name]}</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255,215,0,0.8)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="border-2 border-yellow-500 text-yellow-400 font-semibold rounded-2xl w-fit mx-auto py-2 px-8 cursor-pointer hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200"
        >
          Send
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Form;



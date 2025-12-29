import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormFields = [
  {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Enter your Title here!",
  },
  {
    label: "Subtitle",
    name: "subtitle",
    type: "text",
    placeholder: "Enter your Subtitle here!",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    placeholder: "Enter your Description here!",
  },
];

function FormComponent() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setInitialLoading(true);
        try {
          const response = await axios.get(
            `http://192.168.1.68:3000/homesection/${id}`
          );
          console.log("Fetched data:", response.data);
          setData(response.data?.data || response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setInitialLoading(false);
        }
      };
      fetchData();
    }
  }, [id]);

  if (initialLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-700 text-lg font-medium">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {id ? "Update Post" : "Create a Post"}
        </h1>

        <Formik
          enableReinitialize
          initialValues={{
            title: data.title || "",
            subtitle: data.subtitle || "",
            description: data.description || "",
            image: null,
          }}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true);
            try {
              const formData = new FormData();
              formData.append("title", values.title);
              formData.append("subtitle", values.subtitle);
              formData.append("description", values.description);
              if (values.image) formData.append("image", values.image);

              let response;

              if (id) {
                
                response = await axios.patch(
                  `http://192.168.1.91:3000/homesection/${id}`,
                  formData
                );
                toast.success("Post updated successfully!");
              } else {
               
                response = await axios.post(
                  "http://192.168.1.91:3000/homesection",
                  formData
                );
                toast.success("Post created successfully!");
              }

              console.log("Post successful:", response.data);
              resetForm();
              navigate("/");
            } catch (error) {
              console.error("Error posting data:", error);
              toast.error("Failed to save post!");
            } finally {
              setLoading(false);
            }
          }}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-5">
              
              {FormFields.map((field, index) => (
                <div key={index} className="flex flex-col">
                  <label
                    htmlFor={field.name}
                    className="text-gray-700 font-medium mb-1"
                  >
                    {field.label}
                  </label>
                  <Field
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              ))}

              
              <div className="flex flex-col">
                <label
                  htmlFor="image"
                  className="text-gray-700 font-medium mb-1"
                >
                  Image
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFieldValue("image", e.currentTarget.files[0])
                  }
                  className="border border-gray-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

          
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 rounded-md text-white font-semibold transition ${
                  loading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading
                  ? id
                    ? "Updating..."
                    : "Posting..."
                  : id
                  ? "Update"
                  : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>

    
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default FormComponent;
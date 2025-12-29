import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://192.168.1.68:3000/homesection`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Item not found");
        setLoading(false);
      });
  }, [id]);


  const handleDelete = async () => {
    try {
      await axios.delete(`http://192.168.1.68:3000/homesection/${id}`);
      toast.success("Item deleted successfully!");
      navigate("/"); 
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete item");
    }
  };

  if (loading) return <div className="p-4 text-white">Loading...</div>;
  if (!item) return <div className="p-4 text-white">Item not found</div>;

  return (
    <div className="w-full h-screen flex justify-center items-center bg-teal-500 text-white">
      <div className="text-center">
        <h2 className="mb-4 text-xl">Are you sure you want to delete this item?</h2>
        <p className="mb-4">Title: {item.title}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleDelete}
            className="bg-red-600 px-4 py-2 rounded-md"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => navigate("/Api")}
            className="bg-gray-800 px-4 py-2 rounded-md"
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;

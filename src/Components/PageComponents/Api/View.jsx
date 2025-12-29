import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function ViewData1() {

  const { id } = useParams(); 
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchData = async () => {
    setLoading(false); 
    try {
      const res = await axios.get(`http://192.168.1.91:3000/homesection/${id}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Item not found");
    }
  };

  fetchData();
}, [id]);




    if (loading) return <div className="p-4">Loading...</div>;
  if (!data) return <div className="p-4 text-red-500">Item not found</div>;

  return (
    <div>
      <div>
      <div className="p-4 flex flex-col bg-slate-100 absolute w-full h-full items-center justify-center">
      <h2 className="text-lg font-semibold mb-4">
        {data.title}
      </h2>
      <h1>
        {data.subtitle}
      </h1>
      <p>{data.description}</p>
      <img src={data.image} alt={data.title} className='h-100 w-100 object-cover'  />
      <button
          onClick={() => navigate("/")}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-red-400 mt-10"
        >
          Go Back
        </button>
      
    </div>
    </div>
    </div>
  )
}

export default ViewData1

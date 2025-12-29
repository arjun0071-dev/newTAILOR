import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Tablee() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://192.168.1.91:3000/homesection")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Sorry, you have failed!");
        setLoading(false);
        console.log(err);
      });
  }, []);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 table-auto">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left"> Image </th>
            <th className="border border-gray-300 px-4 py-2 text-left"> Title </th>
            <th className="border border-gray-300 px-4 py-2 text-left"> Subtitle </th>
            <th className="border border-gray-300 px-4 py-2 text-left"> Description </th>
            <th className="border border-gray-300 px-4 py-2 text-left"> Action </th>

          </tr>
        </thead>
        <tbody>
          {data.map((val, i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-4 py-2">
                <img src={val.image} alt={val.title} className="w-24" />
              </td>
              <td className="border border-gray-300 px-4 py-2">{val.title}</td>
              <td className="border border-gray-300 px-4 py-2">{val.subtitle}</td>
              <td className="border border-gray-300 px-4 py-2">{val.description}</td>
              <td className="px-4 py-2 border-b text-center space-x-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => navigate(`/api/${val.id}`)} 
                >
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" 
                    onClick={() => navigate(`/delete/${val.id}`)} >
                 
                  Delete
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => navigate(`/view/${val.id}`)} >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tablee;



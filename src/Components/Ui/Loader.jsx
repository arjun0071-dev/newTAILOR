import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";

export default function Loader() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timeout);
  }, [location]);

  
  if (!loading) {
    return null;
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-white ">
      <FadeLoader />
    </div>
  );
}


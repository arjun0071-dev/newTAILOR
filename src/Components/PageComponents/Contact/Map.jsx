import React from 'react'
import map from "../../../assets/map.png"

function Map() {
  return (
    <div className="flex justify-center bg-amber-600">
      <img 
        src={map} 
        alt="map" 
        className="
          w-full 
          h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
          object-cover
          
        " 
      />
    </div>
  )
}

export default Map
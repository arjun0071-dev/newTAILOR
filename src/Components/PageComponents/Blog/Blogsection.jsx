import React from 'react';

function Blogsection(props) {
  return (
    <div className="flex justify-center p-4">
      <div className="bg-white shadow-lg shadow-black/30 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
        <div className="flex flex-col">

          {/* Blog Image */}
          <img
            src={props.img}
            alt=""
            className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-t-xl"
          />

          {/* Blog Content */}
          <div className="flex flex-col gap-3 p-4 sm:p-5 md:p-6">
            <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl">
              Google inks pact for new 35-storey office
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-base text-gray-700">
              That dominion stars lights dominion divide years for fourth 
              have don't stars is that he earth it first without heaven 
              in place seed it second morning saying.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogsection;



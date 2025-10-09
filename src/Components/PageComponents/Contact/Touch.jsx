import React from "react";

function Touch() {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-12 -mt-20 sm:-mt-40 md:-mt-60">
      <div className="flex flex-col gap-10 shadow-md p-6 sm:p-8 md:p-10 rounded-2xl w-full max-w-5xl bg-white">
        
        <div className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-center md:text-left">
          Get in Touch
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-between">
         
          <div className="flex flex-col gap-5 w-full md:w-2/3">
           
            <textarea
              className="h-32 w-full border border-gray-400 rounded-xl p-3 resize-none"
              placeholder="Enter Message"
            />

          
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                className="h-12 w-full sm:w-1/2 border border-gray-400 rounded-xl p-3"
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="h-12 w-full sm:w-1/2 border border-gray-400 rounded-xl p-3"
                placeholder="Email"
              />
            </div>

         
            <input
              type="text"
              className="h-12 w-full border border-gray-400 rounded-xl p-3"
              placeholder="Enter Subject"
            />

           
            <button className="border-2 border-blue-500 text-blue-500 rounded-2xl w-fit py-2 px-6 cursor-pointer hover:bg-blue-500 hover:text-white transition">
              Send
            </button>
          </div>

          
          <div className="flex flex-col gap-7 w-full md:w-1/3">
            <div>
              <div className="font-bold">Buttonwood, California.</div>
              <div className="font-light">Rosemead, CA 91770</div>
            </div>

            <div>
              <div className="font-bold">+1 253 565 2365</div>
              <div className="font-light">Mon to Fri 9am to 6pm</div>
            </div>

            <div>
              <div className="font-bold">support@colorlib.com</div>
              <div className="font-light">Send us your query anytime!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Touch;
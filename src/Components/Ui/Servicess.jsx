import React from 'react'
import service1 from "../../assets/services1.svg"
import service2 from "../../assets/services2.svg"
import service3 from "../../assets/services3.svg"
import service4 from "../../assets/services4.svg"

function Servicess() {
  const services = [
    { img: service1, title: "Tailor Sewing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
    { img: service2, title: "Custom Fitting", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
    { img: service3, title: "Premium Fabric", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
    { img: service4, title: "Fast Delivery", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
  ]

  return (
    <div className=' flex flex-col items-center mx-5 gap-16  lg:gap-20 py-10'>

      <div className='flex flex-col items-center gap-4 text-center max-w-2xl '>
        <h2 className='text-3xl sm:text-4xl font-semibold'>
          Why use our service?
        </h2>
        <p className='text-gray-600 text-sm sm:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12'>
        {services.map((s, i) => (
          <div key={i} className='flex flex-col items-center text-center gap-4 p-5 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105'>
            <img src={s.img} alt={s.title} className='w-12 h-16' />
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg sm:text-xl font-medium'>{s.title}</h3>
              <p className='text-sm text-gray-600'>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicess
import React from 'react'
import Abouthouse from '../Ui/Abouthouse'
import Videosection from '../Ui/Videosection'
import Testimonial from '../Ui/Testimonial'
import Instagramsection from '../Ui/Instagramsection'
import Footer from '../Navigation/Footer'
import New from '../Ui/New'

import Card from '../Ui/Card'
import Servicess from '../Ui/Servicess'

function Service() {
  return (
     <div className='flex gap-24 h-fit py-9 flex-col'>
       <New title="Services"/>
      <Card/>
      <Servicess />
      <Videosection />
      <Testimonial />
      <Instagramsection/>
       
    </div>
  )
}

export default Service
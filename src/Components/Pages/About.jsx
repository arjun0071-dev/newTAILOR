import React, { useState } from 'react'


import Abouthouse from '../Ui/Abouthouse'
import Videosection from '../Ui/Videosection'
import Testimonial from '../Ui/Testimonial'
import Instagramsection from '../Ui/Instagramsection'

import New from '../Ui/New'
import Servicess from '../Ui/Servicess'







function About() {
   
  return (
    <div className='flex gap-24 h-fit py-9 flex-col'>
    <New title="About"/>
      <Abouthouse />
      <Servicess />
     
      <Videosection />
      <Testimonial />
      <Instagramsection />
     
      
      </div>
  )
}

export default About
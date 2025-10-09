import React from 'react'
import Herosection from '../PageComponents/Home/Herosection'
import Card from '../Ui/Card'
import Abouthouse from '../Ui/Abouthouse'
import Videosection from '../Ui/Videosection'
import Testimonial from '../Ui/Testimonial'
import Instagramsection from '../Ui/Instagramsection'
import Footer from '../Navigation/Footer'
import Servicess from '../Ui/Servicess'

function Home() {
  return (
    <div className='flex flex-col gap-22 h-fit py-9 '>
      <Herosection />
      <Card/>
      <Abouthouse />
      <Servicess/>
      <Videosection/>
      <Testimonial/>
      <Instagramsection/>
      
    </div>
  )
}

export default Home
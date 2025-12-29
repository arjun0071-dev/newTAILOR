import React from 'react'
import Navbar from '../Navigation/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Navigation/Footer';
import Loader from '../Ui/Loader';

function Layout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Loader/>
        <Outlet />

      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;
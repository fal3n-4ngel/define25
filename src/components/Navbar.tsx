import React from 'react'

function Navbar() {
  return (
    <nav className="flex items-center justify-between backdrop-filter backdrop-blur-md/30 pb-8 pt-12   bg-[#05050A] ">
     <div className='w-[70vw] mx-auto flex flex-row px-10 items-center justify-between'>
     <img src="logo-nav.png" alt="Define Logo" />
        <div className="flex gap-4">
          <a href="">Features</a>
          <a href="">Company</a>
          <a href="">Resources</a>
          <a href="">Docs</a>
          <a href="">Pricing</a>
        </div>
        <button>Register</button></div> 
      </nav>
  )
}

export default Navbar
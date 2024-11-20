import React from 'react'
import Logo from "../assets/log.webp"

const Navbar = () => {
  return (
    <nav className="bg-dark-gray w-full  font-geologica h-[60px]"> 
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex items-center gap-[10px] px-[15px] py-[10px]"> 
          <div className="flex-shrink-0">
            <img 
              src={Logo} 
              alt="Logo" 
              className="h-10 w-8"
            />
          </div>
          
          <div className="text-light-gray text-xl font-medium">
            Apple Security
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
"use client"

import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-gray-800 p-4 flex items-center ">
      <div className='w-[90%] lg:w-[83%] flex items-center justify-between mx-auto'>
        <h2 className='text-xl lg:text-3xl font-semibold text-white'>Walmart</h2>
        <ul className="hidden lg:flex items-center space-x-6">
          <li className="text-white hover:text-gray-300">Home</li>
          <li className="text-white hover:text-gray-300">Products</li>
          <li className="text-white hover:text-gray-300">About Us</li>
          <li className="text-white hover:text-gray-300">Contact</li>
        </ul>
      <div className="lg:hidden flex items-center">
        <button onClick={()=>setIsOpen(!isOpen)} className="text-white">{isOpen ? 'Open' : 'Close'}</button>
      </div>
      </div>
        {isOpen && (
  <ul className="fixed lg:hidden top-14 right-4 w-[75%] bg-gray-800 shadow-lg p-4 space-y-2 z-50">
    <li className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b">Home</li>
    <li className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b">Products</li>
    <li className="text-gray-800 hover:text-blue-600 font-medium py-2 border-b">About Us</li>
    <li className="text-gray-800 hover:text-blue-600 font-medium py-2">Contact</li>
  </ul>
)}

            

    </nav>
  )
}

export default Navbar

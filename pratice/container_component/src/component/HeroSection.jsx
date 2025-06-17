import React from 'react'

function HeroSection() {
  return (
    <main className=" py-8 flex items-center justify-start w-[90%] lg:w-[83%] ">
      <div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">Discover the best products at unbeatable prices.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </main>
  )
}

export default HeroSection

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div className="bg-white">
  <header className="bg-[#FCF8F1] bg-opacity-30">
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 lg:h-20">
        <div className="flex-shrink-0">
          <a href="#"  className="flex  lg:text-3xl font-bold">
            {/* <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"  /> */}
            Store
          </a>
        </div>
        <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
          {/* Menu open: "hidden", Menu closed: "block" */}
          <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
          {/* Menu open: "block", Menu closed: "hidden" */}
          <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
          <a href="#"  className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Features </a>
          <Link to="/products"  className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Products </Link>
          <Link to="/addproduct"  className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Add Products </Link>
          <a href="#"  className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Pricing </a>
        </div>
        <a href="#"  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button"> Join Now </a>
      </div>
    </div>
  </header>
  <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">React &amp; Redux Toolkit Store</h1>
          <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>
          <a href="#"  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
            Join for free
            <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
          <p className="mt-5 text-gray-600">Already joined us? <a href="#"  className="text-black transition-all duration-200 hover:underline">Log in</a></p>
        </div>
        <div>
          <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"  />
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default Header
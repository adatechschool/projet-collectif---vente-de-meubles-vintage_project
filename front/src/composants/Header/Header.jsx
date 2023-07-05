import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header flex flex-col justify-center bg-cover text-dark-brown min-h-[85vh] bg-center'>
        <div className='border-[1px] border-black text-start mx-auto mt-2 mb-10 py-4 px-6 bg-beige opacity-[.85]'>
          {/* <h1 className='text-4xl'>Vintage :</h1> */}
          <h2 className='text-3xl'>Everything you need is already made!</h2>
        </div>
        
        <div className='absolute inset-x-0 bottom-0'>
          <span className="inline-block">
          <a href="#main">
            <svg className="w-32 h-32 text-beige" fill="none" stroke="beige" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7">
            
              </path>
              
            </svg></a>
          </span>
        </div>
       

    </div>
  )
}

export default Header
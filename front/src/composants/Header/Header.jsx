import React from 'react'
import './Header.css'
import PopupDiscount from '../PopupDiscount/PopupDiscount'
import { useState, useEffect } from 'react'

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    <>
          {showPopup && <PopupDiscount />}

    <div className='header flex flex-col bg-cover text-dark-brown min-h-[50vh] bg-center'>
        <div className='border-[1px] border-black text-start mx-auto mt-8 mb-auto py-4 px-6 rounded-xl bg-beige opacity-[.85]'>
          <h1 className='text-6xl'>Vintage :</h1>
          <h2 className='text-4xl'>Le mobilier qui a fait ses preuves !</h2>
        </div>
        
        <div className="mt-auto">
          <span className="inline-block">
          <a href="#main">
            <svg className="w-32 h-32 text-beige" fill="none" stroke="beige" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7">
            
              </path>
              
            </svg></a>
          </span>
        </div>
       

    </div>
    </>
  )
  
}

export default Header
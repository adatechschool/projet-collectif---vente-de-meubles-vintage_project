import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header flex text-dark-brown h-screen'>
        <div className='border-[1px] border-black text-start mx-auto my-auto py-4 px-2 bg-beige opacity-[.85]'>
          <h1>Vintage :</h1>
          <h2>Le mobilier qui a fait ses preuves !</h2>
        </div>
    </div>
  )
}

export default Header
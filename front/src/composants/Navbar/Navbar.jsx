import React from 'react'
import logoSun from "/src/assets/logo-sun.png"
import logoPanier from "/src/assets/icon_panier.png"
import menuIcon from "/src/assets/menu_icon.png"
import { Link } from 'react-router-dom'


function Navbar() {
  const backgroundStyle = {
    backgroundImage : "url('/src/assets/logo-sun.png')",

    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
  };

  return (
    <div className='bg-beige h-32' style={backgroundStyle}>
      <ul className='flex items-center justify-between'>
        <li className='bg-lime-600 text-3xl text-black-600 font-bold'>Vintage</li>
        {/* <li className='flex-2'><img src={logoSun}></img></li> */}
        <li className='flex-3'><Link to="/panier"><img src={logoPanier}></img></Link></li>
        <li className='flex-4'><img src={menuIcon}></img></li>
      </ul>
    
    </div>

  )
}

export default Navbar;
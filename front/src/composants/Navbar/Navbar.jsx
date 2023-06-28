import React from 'react'
import logoSun from "/src/assets/logo-sun.png"
import logoPanier from "/src/assets/icon_panier.png"
import menuIcon from "/src/assets/menu_icon.png"
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';



function Navbar() {
  const backgroundStyle = {
    backgroundImage : "url('/src/assets/logo-sun.png')",

    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
  };

  return (
    <div className='bg-beige h-32' style={backgroundStyle}>
      <ul className='flex h-full '>
        <div className='h-full flex justify-start items-center w-3/4'>
          <li className='ml-[150px] text-3xl text-black-600 font-bold'>Vintage</li>
        </div>
        <div className='flex justify-end items-center w-1/4'>
          <li className='flex-3 mr-2.5'><Link to="/panier" className='text-black'>
            <LocalMallIcon sx={{fontSize:70}}/></Link>
            </li>
          <li className='flex-3 mt-3'><MenuIcon sx={{fontSize:70}}/></li>
          {/* A revoir, composant menu  <li><Menu/></li> */}
        </div>
      </ul>
    </div>

  )
}

export default Navbar;
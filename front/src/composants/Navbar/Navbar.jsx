import React from 'react';
import logoSun from "/src/assets/logo-sun.png";
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Icon_admin from '../Icon_admin/Icon_admin';
import { panierContext } from '../../App';
import { useContext } from 'react';

// const verifAdmin = false;
const verifAdmin = true;

const CustomBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: "white",
    backgroundColor: "#421F00"
  },
}));


function Navbar() {
  const {panier} = useContext(panierContext)


  const backgroundStyle = {
    backgroundImage: "url('/src/assets/logo-sun.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
  };

  console.log("navbar", {panier});

  return (
    <div className='bg-beige h-32' style={backgroundStyle}>
      <ul className='flex h-full '>
        <div className='h-full flex justify-start items-center w-3/4'>
          <li className='ml-[10%] mt-6 text-4xl text-dark-brown font-aurore'>
          <Link to="/accueil">Vintage</Link></li>
        </div>
        <div className='flex justify-end items-center w-1/4'>
          <Icon_admin admin={verifAdmin}/> 
          <li className='flex-3 mr-2.5'>
            <Link to="/panier" className='text-dark-brown'>
              <CustomBadge badgeContent={(panier.length)}>
                <LocalMallIcon sx={{ fontSize: 70 }} />
              </CustomBadge>
            </Link>
          </li>
          <li className='flex-3 mt-3 text-dark-brown'><MenuIcon sx={{ fontSize: 70 }} /></li>

          {/* A revoir, composant menu  <li><Menu/></li> */}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

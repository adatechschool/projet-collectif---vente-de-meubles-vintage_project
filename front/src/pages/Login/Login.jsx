import React from 'react';
import Signup from '../Signup/signup';
import Bouton from '../../composants/Bouton/Bouton';
import { Link } from 'react-router-dom';
import COVER_IMAGE from "./imageLogin.jpg";

const color = {
  background: "#f5f5f5"
}

function Login() {

  const handleClick = () => {
    console.log('Le bouton a été cliqué !');
    // Effectuez les actions souhaitées ici
  };

  return (
    <div className= "w-full min-h-screen flex items-start bg-[#f5f5f5]">
        <div className= 'relative w-1/2 h-full flex flex-col' >
          <div className= 'absolute top-[20%] left-[10%] right-[10%] flex flex-col '>
            <h1 className="text-4xl text-white font-bold my-4 drop-shadow-lg">Transformez votre intérieur avec nos meubles vintage uniques,</h1>
            <p className="text-xl text-white font-normal drop-shadow-lg">Commencez gratuitement et bénéficiez des offres attractives de la communauté. </p>
          </div>
          <img src={COVER_IMAGE} className="w-full h-full object-cover "/>
        </div>
        
        <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 space-y-20 ">
          <h1 className="text-x1 text-left text-[#060606] font-semibold ">Vintage Logo</h1>

          <div className='w-full flex flex-col max-w-[550px]'>

            <div className='flex flex-col mb-10 '>
              <h3 className="text-3xl text-left font-semibold mb-2">Login</h3>
              <p className="text-base text-left mb- ">Veuillez entrer vos informations.</p>
            </div>

            <div className= 'w-full flex flex-col'>
              <input
              type="email"
              placeholder='Email'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

              <input
              type="password"
              placeholder='Password'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
            </div>

            <div className='w-full flex items-center  '>
              <div className='w-full flex items-center'>
                <input
                 type='checkbox'
                 className='w-4 h-4 mr-2 '/>
                 <p className='text-sm'>Remember me</p>
              </div>
              <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password?</p>
            </div>

            <div className='w-full flex flex-col my-8'>
              <div className='w-full text-[#ffffff] my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
                <Link to="/accueil"><Bouton texteBouton='Test'/></Link>
                <Bouton onClick={handleClick} texteBouton='Log in'/> 
              </div>  

              <div className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>
                <Link to="/signup" className='text-black'><Bouton texteBouton='Sign up' /></Link>
              </div>
            </div>
          </div>

          <div className ="w-full items-center space-y-20">
            <p className="text-sm text-center font-normal text-[#060606]">Vous n&#39;avez pas encore de compte? <Link to="signup"><span className='font-semibold underline underline-offset-2 curson-pointer'> Sign up</span></Link></p>
          </div>


        </div>
    </div>
  )
}
{/* <div>
        <h1>Login</h1>
        <Link to="/accueil"><Bouton texteBouton="Se connecter"/></Link>
      </div> */}
export default Login;
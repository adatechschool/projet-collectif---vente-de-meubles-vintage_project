import React from 'react';
import Bouton from '../../composants/bouton/Bouton';
import { Link } from 'react-router-dom';
import COVER_IMAGE from "./imageLogin.jpg";

const color = {
  background: "#f5f5f5"
}

function Login() {
  return (
    <div className= "w-full min-h-screen flex items-start bg-[#f5f5f5]">
        <div className= 'relative w-1/2 h-full flex flex-col' >
          <div className= 'absolute top-[20%] left-[10%] right-[10%] flex flex-col '>
            <h1 className="text-4xl text-white font-bold my-4 ">Transformez votre intérieur avec nos meubles vintage uniques,</h1>
            <p className="text-xl text-white font-normal">Commencez gratuitement et bénéficiez des offres attractives de la communauté. </p>
          </div>
          <img src={COVER_IMAGE} className="w-full h-full object-cover "/>
        </div>
        
        <div className="w-1/4 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between">
          <h1 className="text-x1 text-[#060606] font-semibold">Vintage</h1>

          <div className='w-full flex flex-col'>
            <h3 className="text-2xl font-semibold mb-4">Login</h3>
            <p className="text-sm mb-2">Veuillez entrer vos informations.</p>
          </div>

          {/* <div className ="w-full">
            <p className="text-sm font-normal text-[#060606]">Vous n&#39;avez pas encore de compte? <span className='font-semibold underline underline-offse'></span></p>
          </div> */}


        </div>
    </div>
  )
}
{/* <div>
        <h1>Login</h1>
        <p>Welcome Back! Please entre your details</p>
        <Link to="/accueil"><Bouton texteBouton="Se connecter"/></Link>
      </div> */}
export default Login;
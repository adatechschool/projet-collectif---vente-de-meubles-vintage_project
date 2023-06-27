import React from 'react';
import Bouton from '../../composants/bouton/Bouton';
import { Link } from 'react-router-dom';
import COVER_IMAGE from "./imageLogin.jpg";

function Login() {
  return (
    <div className= "w-full min-h-screen flex items-start">
      {/* faire une image de cover */}
      <div className= 'relative w-1/2 h-full flex flex-col' >
        <img src={COVER_IMAGE} className="w-full h-full object-cover "/>

      </div>
      {/* <div>
        <h1>Login</h1>
        <p>Welcome Back! Please entre your details</p>
        <Link to="/accueil"><Bouton texteBouton="Se connecter"/></Link>
      </div> */}
    </div>
  )
}

export default Login;
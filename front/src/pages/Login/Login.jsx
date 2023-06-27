import React from 'react';
import Bouton from '../../composants/bouton/Bouton';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/accueil"><Bouton texteBouton="Se connecter"/></Link>
    </div>
  )
}

export default Login;
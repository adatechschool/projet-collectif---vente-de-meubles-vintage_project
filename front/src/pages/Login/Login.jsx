
import React, {useState} from 'react';
import Bouton from '../../composants/Bouton/Bouton';
import { Link } from 'react-router-dom';
import COVER_IMAGE from "./logNewImg.jpg";
import { handleClick2 } from '../../function/handleClick';
const port=import.meta.env.VITE_PORT;


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let loginUser = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:${port}/login`
      let res = await fetch(url, {
        method: "POST",
        // Le "headers" est absolument nécessaire sinon la requête n'aboutit pas 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password // NON UTILISE PAR LE BACK POUR LE MOMENT
        })
      });
      let resJson = await res.json();
      if (res.status === 200) {
        alert(resJson.message) // message de réussite envoyé par le back, affiché en alerte
        window.location.href = "/accueil" // Après ajout dans la base, l'utilisateur est renvoyé sur la page login
      } else {
        alert("Login Erreur")
      }
    } catch (err) {
      console.log(err);
    }
  }



  return (

    <div className= "w-full min-h-screen flex items-start bg-[#f5f5f5]">
      <div className= 'relative w-1/2 h-full flex flex-col' >
        <div className= 'absolute top-[10%] left-[10%] right-[10%] flex flex-col bg-beige opacity-[.85]'>
          <h1 className="text-2xl text-dark-brown font-bold my-4 drop-shadow-lg">Transformez votre intérieur avec nos meubles vintage uniques</h1>
          <p className="text-xl text-dark-brown font-normal drop-shadow-lg">Commencez gratuitement et bénéficiez des offres attractives de la communauté. </p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-screen object-cover "/>
      </div>
      
      <div className="w-1/2 h-screen bg-[#f5f5f5] flex flex-col p-10 space-y-10 ">
        <h1 className="text-3xl text-left text-dark-brown font-aurore font-semibold ">Vintage</h1>

        <div className='w-full flex flex-col max-w-[550px]'>

          <div className='flex flex-col mb-10 '>
            <h3 className="text-3xl text-left font-semibold text-dark-brown mb-2">Bienvenue,</h3>
            <p className="text-base text-left text-dark-brown mb- ">Veuillez entrer vos informations.</p>
          </div>

          <div className='w-full flex flex-col'>
            <form onSubmit={loginUser}>
              <input
                type="email"
                placeholder='Email'
                value={email}
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
                onChange={(e) => setEmail(e.target.value)}
                />

              <input
                type="password"
                placeholder='Password'
                value={password}
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
                onChange={(e) => setPassword(e.target.value)}
                />

              <div className='w-full flex items-center  '>
                <div className='w-full flex items-center'>
                  <input
                  type='checkbox'
                  className='w-4 h-4 mr-2 '/>
                  <p className='text-sm'>Remember me</p>
                </div>
                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password?</p>
              </div>

              <div className='w-full flex flex-col my-4'>
                <button className='w-full text-beige mt-2 font-semibold bg-dark-brown rounded-md p-3 text-center flex items-center justify-center'>
                  {/* <Link to="/accueil"><Bouton texteBouton='Test'/></Link> */}
                  <Bouton onClick={handleClick2} texteBouton='Log in'/> 
                </button>
              </div>
            </form>  

            <button className='w-full text-[#060606]  font-semibold bg-white border-2 border-dark-brown rounded-md p-3 text-center flex items-center justify-center'>
              <Link to="/signup" className='text-dark-brown'> <Bouton texteBouton='Sign up'/> </Link> 
            </button>
          </div>
          <div className ="w-full items-center m-4 space-y-20">
          <p className="text-sm text-center font-normal text-[#060606]">Vous n&#39;avez pas encore de compte? <Link to="signup"><span className='font-semibold underline underline-offset-2 curson-pointer'> Sign up</span></Link></p>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Login;

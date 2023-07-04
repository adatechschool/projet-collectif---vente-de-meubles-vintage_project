import React, {useState} from 'react';
import Bouton from '../../composants/Bouton/Bouton';
import { Link } from 'react-router-dom';
import COVER_IMAGE from "./imageLogin.jpg";
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
    <div className="min-h-screen flex flex-col lg:flex-row items-start bg-[#f5f5f5]">
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen flex flex-col">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full lg:w-2/3">
          <h1 className="drop-shadow-lg text-4xl lg:text-5xl text-white font-bold my-4 lg:my-8">Transformez votre intérieur avec nos meubles vintage uniques,</h1>
          <p className="drop-shadow-lg text-xl lg:text-2xl text-white font-normal">Commencez gratuitement et bénéficiez des offres attractives de la communauté.</p>
        </div>

        <img src={COVER_IMAGE} className="w-full h-full object-cover" alt="Cover Image" />
      </div>

      <div className="w-full lg:w-1/2 h-auto lg:h-screen bg-[#f5f5f5] flex flex-col p-10 lg:p-20 space-y-10 lg:space-y-20 items-center justify-center">
        <h1 className="text-x1 text-left text-[#060606] font-semibold ">Vintage Logo</h1>

        <div className='w-full max-w-[550px]'>

          <div className='flex flex-col mb-10 '>
            <h3 className="text-3xl lg:text-4xl text-left font-semibold mb-2">Login</h3>
            <p className="text-base lg:text-xl text-left mb- ">Veuillez entrer vos informations.</p>
          </div>

          <div className= 'w-full flex flex-col'>
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

              <div className='w-full flex flex-col my-8'>
                <div className='w-full text-[#ffffff] my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
                  {/* <Link to="/accueil"><Bouton texteBouton='Test' /></Link> */}
                  <Bouton onClick={handleClick2} texteBouton='Log in' />
                </div>
              </div>
            </form>

        

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

export default Login;

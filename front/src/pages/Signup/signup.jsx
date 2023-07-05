import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import COVER_IMAGE from "./signuptry2.jpg";
const port=import.meta.env.VITE_PORT;

function Signup() {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let addUser = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:${port}/signup`
      let res = await fetch(url, {
        method: "POST",
        // Le "headers" est absolument nécessaire sinon la requête n'aboutit pas 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          name: name,
          firstname: firstname,
          email: email,
          password: password, // NON UTILISE PAR LE BACK POUR LE MOMENT
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        alert(resJson.message) // message de réussite envoyé par le back, affiché en alerte
        window.location.href = "/" // Après ajout dans la base, l'utilisateur est renvoyé sur la page login
      } else {
        alert("Utilisateur non créé")
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start bg-[#f5f5f5]">
      <div className="w-full lg:w-1/2 h-full lg:h-screen bg-[#f5f5f5] flex flex-col p-10 lg:p-20 space-y-10 lg:space-y-10 items-center justify-center">
        <h1 className="text-4xl pt-4 text-left text-dark-brown font-aurore font-semibold">Welcome to Vintage!</h1>

        <div className='w-full max-w-[550px]'>
          <div className='flex flex-col space-y-4 mb-8'>
            <h3 className="text-3xl text-left text-dark-brown font-semibold mb-2">Inscription</h3>
            <p className="text-base text-dark-brown text-left">Veuillez entrer vos informations.</p>
          </div>
    
          <div className='w-full flex flex-col space-y-4'>
            <form onSubmit={addUser}>
              <input
                type="text"
                value={name}
                placeholder='Nom'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                value={firstname}
                placeholder='Prénom'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type="email"
                value={email}
                placeholder='Email'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                value={password}
                placeholder='Mot de passe'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className='w-full text-white my-4 font-semibold bg-dark-brown rounded-md p-3 text-center flex items-center justify-center mt-8 mb-8'>
                Créer votre compte
              </button>
            </form>
          </div>

          <div className="w-full items-center space-y-10 lg:space-y-20">
            <p className="text-sm lg:text-base text-center font-normal text-[#060606] mt-4">Vous avez un compte? <Link to=".."><span className='font-semibold underline underline-offset-2 cursor-pointer'>Connectez-vous</span></Link></p>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen flex flex-col ">
        <div className="absolute p-2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-dark-brown opacity-[.90] w-full lg:w-4/5">
          <h1 className="text-2xl text-beige font-bold my-4 lg:my-8">Transformez votre intérieur avec nos meubles vintage uniques</h1>
          <p className="text-base text-beige font-normal">Commencez gratuitement et bénéficiez des offres attractives de la communauté.</p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-full object-cover" alt="Cover Image" />
      </div>
    </div>
  );
}

export default Signup;

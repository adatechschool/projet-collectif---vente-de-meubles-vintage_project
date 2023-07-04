import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import COVER_IMAGE from "./img.jpg";

const port=import.meta.env.VITE_PORT;

function Signup() {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:${port}/signup`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          firstname: firstname,
          email: email,
          password: password,
        }),
      });
      const resJson = await res.json();
      if (res.status === 200) {
        alert(resJson.message);
        window.location.href = "/";
      } else {
        alert("Utilisateur non créé");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start bg-[#f5f5f5]">
      <div className="w-full lg:w-1/2 h-auto lg:h-screen bg-[#f5f5f5] flex flex-col p-10 lg:p-20 space-y-10 lg:space-y-20 items-center justify-center">
        <h1 className="text-xl text-left text-[#060606] font-semibold">Welcome to Vintage</h1>

        <div className='w-full max-w-[550px]'>
          <div className='flex flex-col space-y-4 mb-10'>
            <h3 className="text-3xl lg:text-4xl text-left font-semibold mb-2">Sign Up</h3>
            <p className="text-base lg:text-xl text-left">Veuillez entrer vos informations.</p>
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

              <button type="submit" className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center mt-12 mb-12'>
                Créer votre compte
              </button>
            </form>
          </div>

          <div className="w-full items-center space-y-10 lg:space-y-20">
            <p className="text-sm lg:text-base text-center font-normal text-[#060606] mt-12">Vous avez un compte? <Link to=".."><span className='font-semibold underline underline-offset-2 cursor-pointer'>Connectez-vous</span></Link></p>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen flex flex-col ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full lg:w-2/3">
          <h1 className="text-4xl lg:text-5xl text-[#2F4F4F] font-bold my-4 lg:my-8">Transformez votre intérieur avec nos meubles vintage uniques,</h1>
          <p className="text-xl text-[#2F4F4F] font-normal">Commencez gratuitement et bénéficiez des offres attractives de la communauté.</p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-full object-cover" alt="Cover Image" />
      </div>
    </div>
  );
}

export default Signup;

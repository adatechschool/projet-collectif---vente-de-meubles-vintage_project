import React from 'react';
import Bouton from '../../composants/Bouton/Bouton';
import { Link } from 'react-router-dom';
import backgroundImage from './img.jpg';


function Signup() {

  const backgroundStyle = {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl w-full max-w-[550px] p-5">
        <h1 className="text-">Welcome to Vintage</h1>
      </div>
    
      {/* <img src={backgroundImage} className="w-full h-full object-cover" alt="Cover Image" /> */}


      <div className="w-full max-w-[550px] p-10">
        <h3 className="text-3xl font-semibold text-left text mb-2">Sign up</h3>
        <div className="flex flex-col space-y-4">
          <input
            type="username"
            placeholder="Username"
            className="py-2 px-3 bg-transparent border-b border-black outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="py-2 px-3 bg-transparent border-b border-black outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="py-2 px-3 bg-transparent border-b border-black outline-none"
          />
        </div>

        <div className="my-8">
          <div className="w-full py-3 font-semibold bg-[#060606] rounded-md text-center">
            <Link to="" className="text-white">
              <Bouton 
                texteBouton="Create Account" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm font-normal text-">
            Already have an account?{" "}
            <Link to="..">
              <span className="font-semibold underline cursor-pointer">Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

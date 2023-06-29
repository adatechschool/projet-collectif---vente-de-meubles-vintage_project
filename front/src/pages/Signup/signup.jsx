import React from 'react'
import Bouton from '../../composants/Bouton/Bouton';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

function Signup() {
  return (

  <div className='w-full flex flex-col max-w-[550px] space-y-20'>

    <div>
      <h1>Welcome to Vintage</h1>
    </div>

      <div>

        <div className= 'w-full flex flex-col'>
        <input
          type="your name"
          placeholder='Your name'
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

          <input
          type="email"
          placeholder='Email'
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

          <input
          type="password"
          placeholder='Password'
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
        </div>

        <div className='w-full flex flex-col my-8'>
          
        <div className='w-full text-[ffffff] my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
            <Link to="/signin" className="text-white"><Bouton texteBouton='Create Account' /></Link>
          </div> 
        </div>

        
        <div className ="w-full items-center space-y-20">
          <p className="text-sm text-center font-normal  text-[#060606]">Already have an account? <Link to=".."><span className='font-semibold underline underline-offset-2 curson-pointer'> Log in</span></Link></p>
        </div>

      </div>
    </div>
      



    )
  }

  export default Signup;
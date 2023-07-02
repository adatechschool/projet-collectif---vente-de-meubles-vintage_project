import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let addUser = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:7000/signup"
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
        setName("");
        setFirstName("");
        setEmail("");
        setPassword("");
        alert(resJson.message)
      } else {
        alert("Utilisateur non créé")
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
  <div className='w-full flex flex-col max-w-[px] space-y-20 place-items-center '>
    <div>
      <h1>Welcome to Vintage</h1>
    </div>

      <div>

        <div className= 'w-full flex flex-col'>
          <form onSubmit={addUser}>
            <input
              type="text"
              value={name}
              placeholder='Your name'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
              onChange={(e) => setName(e.target.value)}
              />
            
            <input
              type="text"
              value={firstname}
              placeholder='Your first name'
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
              placeholder='Password'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
              onChange={(e) => setPassword(e.target.value)}
              />

            <button type="submit" className='w-full text-[ffffff] my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center text-white'>
              Create account
            </button>
          
          </form>
        </div>
        
        <div className ="w-full items-center space-y-20">
          <p className="text-sm text-center font-normal  text-[#060606]">Already have an account? <Link to=".."><span className='font-semibold underline underline-offset-2 curson-pointer'> Log in</span></Link></p>
        </div>

      </div>
  </div>
  )
}

  export default Signup;
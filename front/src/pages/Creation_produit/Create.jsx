import React, { useState } from 'react'
import Navbar from '../../composants/Navbar/Navbar';
import Footer from '../../composants/Footer/Footer';
const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

function Create() {
    const [titre, setTitre] = useState("");
    const [prix, setPrix] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");

    // console.log("titre=",titre);
    // console.log("prix=",prix);
    // console.log("description=",description);
    // console.log("photo=",photo);

    let createProduct = async (e) => {
        e.preventDefault();
        try {
            // const url = `${host}:${port}/meubles/create`;
            const url = `${host}:${port}/meubles/create`;
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    titre: titre,
                    prix: prix,
                    description: description,
                    photo: photo,
                }),
            });
            let resJSON = await res.json();
            if (res.status === 200){
                alert(resJSON.message);
                window.location.href = "/admin"
            } else {
                alert("Produit non crée")
            }
        } catch (err){
            console.log(err);
        }
    }





  return (
    <div>
        <Navbar/>
        <div className='min-h-[75vh]'>Create
            <div>
                <form onSubmit={createProduct}>
                    <input
                        type="text"
                        value={titre}
                        placeholder="Nom du produit"
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        onChange={(e) => setTitre(e.target.value)}
                    />

                    <input
                        type="text"
                        value={prix}
                        placeholder="Prix du produit"
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        onChange={(e) => setPrix(e.target.value)}
                    />

                    <input
                        type="text"
                        value={description}
                        placeholder="Description du produit"
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        type="text"
                        value={photo}
                        placeholder="Photo du produit"
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        onChange={(e) => setPhoto(e.target.value)}
                    />

                    <button type="submit" className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center mt-12 mb-12'>
                        Créer votre produit
                    </button>
                   
                </form>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Create
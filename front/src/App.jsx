import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Accueil from "./pages/Accueil/Accueil";
import Admin from "./pages/Admin/Admin";
import Panier from "./pages/Panier/Panier";
import Produit from "./pages/Produit/Produit";
import Signup from "./pages/Signup/signup";

import './App.css';
import { createContext, useContext, useState, useEffect } from "react";
import Create from "./pages/Creation_produit/Create";
import ModifAdmin from "./pages/ModifAdmin/ModifAdmin";


  export const panierContext = createContext({});
  export const reductionContext = createContext({})

function App() {
  
  const [panier, setPanier] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  useEffect(() => {
    // Stockage dans le local storage à chaque fois qu'on modifie le panier
    if (panier.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(panier));
      console.log("panier dans le local storage", localStorage.getItem('cartItems'));
    } else {
      localStorage.removeItem('cartItems')
      console.log("Le panier est vide.")
    }
  }, [panier])

  return (
    <panierContext.Provider value={{panier, setPanier}}>
      <reductionContext.Provider value = {10}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path="/accueil" element={<Accueil/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/produit/:id" element={<Produit/>}/>
      <Route path="/panier/" element={<Panier/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/modif/:id" element={<ModifAdmin/>}/>
    </Routes>
    </BrowserRouter>    
      </reductionContext.Provider>
    </panierContext.Provider>

  )
}


export default App

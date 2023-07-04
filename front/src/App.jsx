import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Accueil from "./pages/Accueil/Accueil";
import Admin from "./pages/Admin/Admin";
import Panier from "./pages/Panier/Panier";
import Produit from "./pages/Produit/Produit";
import Signup from "./pages/Signup/signup";
import './App.css';
import { createContext, useContext, useState } from "react";

  export const panierContext = createContext({});

function App() {
  
  const [panier, setPanier] = useState(0);

  return (
    <panierContext.Provider value={{panier, setPanier}}>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path="/accueil" element={<Accueil/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/produit/:id" element={<Produit/>}/>
      <Route path="/panier/" element={<Panier/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>    
    
    </panierContext.Provider>

  )
}


export default App

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Accueil from "./pages/Accueil/Accueil";
import Admin from "./pages/Admin/Admin";
import Panier from "./pages/Panier/Panier";
import Produit from "./pages/Produit/Produit";
import Signup from "./pages/Signup/signup";
import Create from "./pages/Creation_produit/Create";
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path="/accueil" element={<Accueil/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/produit/:id" element={<Produit/>}/>
      <Route path="/panier" element={<Panier/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App

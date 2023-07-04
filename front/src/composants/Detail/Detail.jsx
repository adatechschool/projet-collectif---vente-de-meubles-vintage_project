/* eslint-disable react/prop-types */
// import React from 'react';
// import { useState, useEffect } from 'react';
// import Bouton from '../Bouton/Bouton';
// import { Link } from 'react-router-dom';
import { createContext,useContext} from 'react';
import { panierContext } from '../../App';

// const [itemPanier, setItemPanier] = useState([]);

// useEffect(() =>{
//     if(addToPanier)
//     localStorage.setItemPanier(, JSON.stringify(itemPanier));
// }, [itemPanier])






const Detail = ({id, nom, prix, description, hauteur, largeur, longueur, disponibilite }) => {

    const {setPanier} = useContext(panierContext)
    const addToPanier = () => {setPanier((b) => b + 1)
        
        console.log('meuble ajoute');
     
    }
    

    return (
        <div className="flex flex-col justify-center items-center w-full h-full" key={id}>
            <h1>{nom}</h1>
            <p>{description}</p>
            <p>Dimension : {hauteur} x {largeur} x {longueur} </p>
            <p>Quantité: {disponibilite ? 1 : 0}</p> 
            <p>{prix} €</p>
            {/* Lien à faire vers ajout panier  */}
            {/* <Link to="/panier"> */}
                <button onClick = {addToPanier}> Ajouter au panier</button>
                {/* <Bouton texteBouton="Ajouter au panier"/> */}
            {/* </Link> */}
        </div>
    );
};

export default Detail; 


// {function addToCart(id ){
//                     let cart = []
//                     const item = produit.find((product) => product.id ===id)
//                     console.log(item);
//                     cart.push(item)
//                     }   }
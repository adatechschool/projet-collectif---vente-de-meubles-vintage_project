/* eslint-disable react/prop-types */
// import React from 'react';
// import { useState, useEffect } from 'react';
// import Bouton from '../Bouton/Bouton';
// import { Link } from 'react-router-dom';
import { createContext,useContext, useEffect} from 'react';
import { panierContext } from '../../App';




const Detail = ({id, nom, prix, description, hauteur, largeur, longueur, disponibilite }) => {

    const {setPanier} = useContext(panierContext)
    const {panier} = useContext(panierContext)
    const addToPanier = () => {
        // setPanier((e) => e + 1)
        let cart = {nom, prix}
        // opérateur de décomposition
        setPanier((a) => [...a, cart])
        // console.log(a, 'ok');
        console.log('meuble ajoute');
        // console.log("panier", (panier));
    }
    

    return (
        <div className="flex flex-col justify-center items-center w-full h-full space-y-6  m-auto p-10" key={id}>
            <h1>{nom}</h1>
            <p>{description}</p>
            <p>Dimension : {hauteur} x {largeur} x {longueur} </p>
            <p>Quantité: {disponibilite ? 1 : 0}</p> 
            <p>{prix} €</p>
            {/* Lien à faire vers ajout panier  */}
            {/* <Link to="/panier"> */}
                <button className=' border-gray-700 bg-slate-600 text-white w-60 rounded-md m-2 p-2' onClick = {addToPanier}> Ajouter au panier</button>
                {/* <Bouton texteBouton="Ajouter au panier"/> */}
            {/* </Link> */}
        </div>
    );
};

export default Detail; 


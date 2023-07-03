import React from 'react';
import Bouton from '../Bouton/Bouton';
import { Link } from 'react-router-dom';

const Detail = ({id, nom, prix, description, hauteur, largeur, longueur, disponibilite, categorie }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full" key={id}>
            <h1>{nom}</h1>
            <p>{description}</p>
            <p>Dimension : {hauteur} x {largeur} x {longueur} </p>
            <p>Quantité : { {disponibilite}? 1 : 0 } </p>
            <p>{prix} €</p>
            {/* Lien à faire vers ajout panier  */}
            <Link to="/panier"><Bouton texteBouton="Ajouter au panier"/></Link>
        </div>
    );
};

export default Detail;
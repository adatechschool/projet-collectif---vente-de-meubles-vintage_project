import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import "./Vignette.css"  

function Vignette({ id, nom, prix, photo }) {
  // Utilisation du Hook UseNavigate pour accéder à un URL spécifique aux pages avant ou arrière
  let navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body className="body">
      <Card.Title>{nom}</Card.Title>
      <Badge variant="primary">{prix} €</Badge>
      {/* <Card.Text variant="primary">
      {prix} €
      </Card.Text> */}
      <Button className="button" onClick={() => {navigate(`/produit/${id}`);}} variant="outline-primary">Go somewhere</Button>
      {/* <button onClick={() => {navigate(`/produit/${id}`);}}>Réserver</button> */}
    </Card.Body>
  </Card>
  );
}

export default Vignette;

// <div>
//       <div key={id} className="Global h-80 w-72 p-2 m-2 bg-orange-500">
//         <div className="image h-4/6">
//           <img src={photo} className="h-full w-full object-cover" />
//         </div>
//         <div className="contenu bg-red-100 flex h-2/6">
//           <div className="produit bg-red-500 w-2/3 text-left p-2">
//             <h1>{nom}</h1>
//             <p>{prix} €</p>
//           </div>
//           <div className="acheter bg-red-200 w-1/3 p-2">
            // <button onClick={() => {navigate(`/produit/${id}`);}}>Réserver</button>
          
//           </div>
//         </div>
//       </div>
//     </div> 

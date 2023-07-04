import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'  




function Vignette({ id, nom, prix, photo }) {
  // Utilisation du Hook UseNavigate pour accéder à un URL spécifique aux pages avant ou arrière
  let navigate = useNavigate();

  return (
    <div>
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{nom}</Card.Title>
      {/* <Card.Prix>{prix}</Card.Prix> */}
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary" onClick={() => {navigate(`/produit/${id}`);}}>Go somewhere</Button>
      {/* <button onClick={() => {navigate(`/produit/${id}`);}}>Réserver</button> */}
    </Card.Body>
  </Card>
  </div>
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
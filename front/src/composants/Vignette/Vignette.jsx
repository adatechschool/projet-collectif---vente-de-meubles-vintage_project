import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import "./Vignette.css"  

function Vignette({ id, nom, prix, photo }) {
  // const variant = bg-dark-brown;
  // Utilisation du Hook UseNavigate pour accéder à un URL spécifique aux pages avant ou arrière
  let navigate = useNavigate();
  return (
<div className="m-4">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={photo} style={{height:'20rem'}}/>
    <Card.Body className="body">
      <Card.Title>{nom}</Card.Title>
      <Badge>{prix} €</Badge> 
      {/* <Card.Text variant="primary">
      {prix} €
      </Card.Text> */}
      <Button className="button bg-dark-brown" onClick={() => {navigate(`/produit/${id}`);}} >Réserver</Button>
      {/* <button onClick={() => {navigate(`/produit/${id}`);}}>Réserver</button> */}
    </Card.Body>
  </Card>
  </div>
  );
}

export default Vignette;



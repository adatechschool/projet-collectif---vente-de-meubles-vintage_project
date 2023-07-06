import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import "./Vignette.css"
import { height, width } from "@mui/system";

function Vignette({ id, nom, prix, photo }) {
  // const variant = bg-dark-brown;
  // Utilisation du Hook UseNavigate pour accéder à un URL spécifique aux pages avant ou arrière
  let navigate = useNavigate();
  return (
    <div className="m-4 ">
      <Card style={{ width: '21rem' }} >
        <Card.Img className="object-cover" variant="top" src={photo} style={{ height: '20rem' }} />
        <Card.Body className="body max-h-20 ">
          <div className="flex pt-4 justify-between	w-full">
            <div className="flex-col p-0 text-left items-start">
              <Card.Title>{nom}</Card.Title>
              <Badge className="mr-4 p-2">{prix} €</Badge>
              {/* <Card.Text variant="primary">
          {prix} €
          </Card.Text> */}
            </div>
            <div className="flex justify-center items-end">
              <Button className="flex border-none justify-center p-3 bg-dark-brown h-1/2 text-center items-center" onClick={() => { navigate(`/produit/${id}`); }} >Détails</Button>
              {/* <button onClick={() => {navigate(`/produit/${id}`);}}>Réserver</button> */}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Vignette;



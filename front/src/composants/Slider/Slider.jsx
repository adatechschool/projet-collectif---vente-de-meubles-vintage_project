import React from "react";
import PapierPeint from '../../assets/bricolage-simple-fond-papier-beige.jpg'
import "./Slider.css"
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';


const Slider = ({photo}) => {
  return (
  //  <img src={photo}></img>
  <MDBCarousel showControls fade>
  <MDBCarouselItem
    className='w-100 h-[500px] object-contain d-block'
    itemId={1}
    src={photo}
    alt='...'
    // style={{ height: '185px' }}
  >
  </MDBCarouselItem>

  <MDBCarouselItem
    className='w-100 h-[500px] object-contain d-block'
    itemId={2}
    src={PapierPeint}
    alt='...'
  >
    <h5 className="text-dark-brown mb-[180px]">Ne passez pas à côté de cette belle opportunité ! </h5>
    <p></p>
  </MDBCarouselItem>

  <MDBCarouselItem
    className='w-100 h-[500px] object-contain d-block'
    itemId={3}
    src={photo}
    alt='...'
  >
  </MDBCarouselItem>
</MDBCarousel>
  );
};

export default Slider;


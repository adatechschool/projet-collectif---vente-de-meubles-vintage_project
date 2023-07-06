import React from "react";
import PapierPeint from '../../assets/bricolage-simple-fond-papier-beige.jpg'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';


const Slider = ({photo}) => {
  return (
  //  <img src={photo}></img>
  <MDBCarousel showControls fade>
  <MDBCarouselItem
    className='w-100 max-h-fit d-block'
    itemId={1}
    src={photo}
    alt='...'
    // style={{ height: '185px' }}
  >
  </MDBCarouselItem>

  <MDBCarouselItem
    className='w-100 flex justify-items-center text-center'
    itemId={2}
    src={PapierPeint}
    alt='...'
  >
    <h5 className="text-dark-brown mb-[70px]">Ne passez pas à côté de cette belle opportunité ! </h5>
    <p></p>
  </MDBCarouselItem>

  <MDBCarouselItem
    className='w-100 d-block'
    itemId={3}
    src={photo}
    alt='...'
  >
  </MDBCarouselItem>
</MDBCarousel>
  );
};

export default Slider;


import React from "react";
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import {images} from '../../data/images'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


const Slider = () => {
  const carouselImages = images.map(({ img }) => ({
    src: img
  }));

  return (
    <Carousel images={carouselImages} style={{ height: 500, width: 600 }} />
  );
};

export default Slider;


import React from "react";
import {images} from '../../data/images';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


const Slider = () => {
  const carouselImages = images.map(({ img }) => ({
    src: img
  }));

  return (
    <Carousel images={carouselImages} style={{ height: 500, width: '80%' }} />
  );
};

export default Slider;


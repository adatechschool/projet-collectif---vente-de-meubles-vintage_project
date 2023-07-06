import React from "react";
import {images} from '../../data/images';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


const Slider = ({photo}) => {
  return (
   <img src={photo}></img>
  );
};

export default Slider;


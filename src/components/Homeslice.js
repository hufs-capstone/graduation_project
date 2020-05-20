import React, { useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Slide1 from '../image/firstsli.png';
import Slide2 from '../image/secondsli.png';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    {
      src: require('../image/firstsli.png'),
      altText: 'Slide 1',
      key: '1'
    },
    {
      src: require('../image/secondsli.png'),
      altText: 'Slide 2',
      key: '2'
    },
  ];
  
  const Homeslice = () => <UncontrolledCarousel items={items} />;

export default Homeslice;
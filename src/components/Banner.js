import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';


const Banner = () => (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
            <img src={h1} alt='nn' />
        </div>
        <div>
            <img src={h2} alt='nn' />
        </div>
        <div>
            <img src={h3} alt='nn' />
        </div>
    </Carousel>
);

export default Banner;
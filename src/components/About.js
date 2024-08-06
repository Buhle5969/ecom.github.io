import React from 'react'
import h4 from '../images/h4.jpg';

const About = () => (
    <section className='about'>
        <div className='about-content'>
            <img src={h4} alt='hdbjn' />
           <div>
            <h2>About us</h2>
            <p>we offer the best plates in the country</p>
           </div>
        </div>
    </section>
);

export default About;
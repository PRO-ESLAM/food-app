import React from 'react';
import '../componats/header/Header.css'
import { Container } from 'react-bootstrap';
import aboutImg from '../assites/about.jpg'
 
const About = () => {
    return (
       <>
       <div className='about'>
       <Container>
        <div className='row'>
            <div className='col-md-6'>
                <img  src={aboutImg}/>
            </div>
            <div className='col-md-6 text'>
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button className='mybtn'>Learn More</button>
            </div>
        </div>
       </Container>
       </div>
       </>
    );
}

export default About;

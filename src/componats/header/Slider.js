import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import imgClint from '../../assites/download.jpg'
import './Header.css' 

function Slider() {
  return (
    <div className='slider '>

    <Container>
<div className='row'>
<div className='col-md-12 col-lg-12 Testimonials'>
    <h2> Testimonials </h2>
    
     </div>
<div className='col-md-12 col-lg-12'>
    <Carousel>
      <Carousel.Item>
       <img src={imgClint}/>
        <Carousel.Caption>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <span>Simab Dave - Web Designer</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={imgClint}/>
        <Carousel.Caption>
        
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <span>Simab Dave - Web Designer</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={imgClint}/>
        <Carousel.Caption>
    
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <span>Simab Dave - Web Designer</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </Container>
            
    </div>
  );
}

export default Slider;

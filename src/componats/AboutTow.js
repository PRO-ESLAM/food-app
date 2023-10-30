import React from "react";
  import '../componats/header/Header.css'
import { Container } from "react-bootstrap";
import aboutImg2 from "../assites/about2.png";

const AboutTow = () => {
  return (
    <>
    <div className="about2">


      <Container>
        <div className="row">
          <div className="col-md-6  text">
            <h2>
              We pride ourselves on making real food from the best ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
             
            </p>
            <ul>
              <li>Etiam sed dolor ac diam volutpat.</li>
              <li>purus a odio finibus bibendum. .</li>
              <li>Erat volutpat aliquet imperdiet.</li>
            </ul>
            <button className="mybtn">Learn More</button>
          </div>
          <div className="col-md-6">
            <img src={aboutImg2} />
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default AboutTow;

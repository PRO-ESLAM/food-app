import React from "react";
import { Container , Row } from "react-bootstrap";
import './Header.css' 
const Projects = () => {
  return (
    <>
      <section className="numbers">
        <Container>
          <Row className="row">
            <div className="col-md-3">
              <h3>1287+</h3>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h3>5786+</h3>
              <h6>PHOTOS</h6>
            </div> 
            <div className="col-md-3">
              <h3>1440+</h3>
              <h6>ROCKETS</h6>
            </div> 
            <div className="col-md-3">
              <h3>7110+</h3>
              <h6>GLOBES</h6>
            </div>
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default Projects;

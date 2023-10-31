import React from "react";
import { Container } from "react-bootstrap";
import "../componats/header/Header.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Footer = () => {
  return (
    <>
    <div className="contact">
      <Container>
        <div className="row">
          <div className="col">
            <h2> Hurry up! Subscribe our newsletter and get <br/>25% Off</h2>
            <p>Limited time offer for this month. No credit card required.</p>
          </div>
          <div className="col-lg-12   col-md-12  ">
            <input type="email" placeholder="Email Address here" />
            <button>Subscribe</button>
          </div>
        </div>
      </Container>
    </div>
        <div className="footer">
        <Container>
          <div className="row">
            <div className="col">
              <ul>
                <li>Register</li>
                <li>Forum</li>
                <li>Affiliate</li>
                <li>FAQ</li>
              </ul>
         
            </div>
            <div className="col-lg-12   col-md-12  ">
            <p>
© 2023. Foodera. All rights reserved BY:RXROW(Eslam).</p>
            </div>
          </div>
        </Container>
      </div>
      </>

  );
};

export default Footer;

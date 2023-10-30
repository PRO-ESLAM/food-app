import React from "react";
import Data from "./Data";
import { Container } from "react-bootstrap";
import './header/Header.css'
const Blog = () => {
  const blogItem = Data.map((item) => {
    return (
      <div className="col-md-4">
        <img src={item.img} />
        <h3>{item.title}</h3>
        <span>{item.time}</span>
        <h6>{item.price}</h6>
        <button>Order Now</button>
      </div>
    );
  });
  return (
    <>
      <div className="blog">
        <Container>
          <div className="row">
            <div className="col-md-6 col-lg-12">
              <h2>Explore Our Foods</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus. Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove.
              </p>
             
            </div>
          </div>
          <div className="row">
          {blogItem}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog;

import React from "react";
import { Col } from "react-bootstrap";
import "./Banner.css";

const BannerMeal = (props) => {
  //   Destructuring meals info
  const { name, price, img, description } = props.meals[props.index];

  return (
    <>
      <Col md={6} className="d-flex align-items-center">
        <div className="banner-info">
          <h1> {name}</h1>
          <p className="text-secondary">{description}</p>
          <h2> ${price} </h2>
        </div>
      </Col>
      <Col>
        <img
          src={img}
          alt="banner-img"
          className="img-fluid w-75 d-block mx-auto"
        />
      </Col>
    </>
  );
};

export default BannerMeal;

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Banner.css";
import useMeals from "../../hooks/useMeals";
import BannerMeal from "./BannerMeal";

const Banner = () => {
  // Meals Hook
  const [meals] = useMeals();
  // State Index Value changing
  const [index, setIndex] = useState(0);

  let bannerMealArr = [];

  if (meals.length) {
    bannerMealArr = meals.slice(0, 3);
  }

  // checking array condition
  const checkArrayInd = () => {
    if (index >= bannerMealArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  // Interval of Banner meals
  useEffect(() => {
    const intervalMeals = setInterval(() => {
      checkArrayInd();
    }, 2000);

    return () => {
      clearInterval(intervalMeals);
    };
  }, [index, checkArrayInd]);

  return (
    <div className="banner my-5">
      <Container>
        <Row>
          {bannerMealArr.length > 0 && (
            <BannerMeal meals={bannerMealArr} index={index} />
          )}
        </Row>
        <Row>
          <Col md={8} className="mx-auto text-center mt-5">
            {bannerMealArr.map((meal) => (
              <Button
                variant="light"
                key={meal.id}
                className="short-thumb"
                onClick={() => setIndex(meal.id - 1)}
              >
                {" "}
                <img src={meal.img} alt="short-thumb" />
              </Button>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

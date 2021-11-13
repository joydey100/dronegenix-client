import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const Review = () => {
  // review state
  const [reviews, setReviews] = useState([]);

  // Getting review data
  useEffect(() => {
    fetch("https://sheltered-waters-81006.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <Container>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            Client Reviews
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {reviews.map((review) => (
            <SingleReview key={review._id} {...review} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Review;

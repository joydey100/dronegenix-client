import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";

const SingleReview = ({ name, job, desc, img, rate }) => {
  const newRate = parseFloat(rate);
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} sx={{ p: 4, height: "100%", textAlign: "center" }}>
        <Typography paragraph component="p" sx={{ mb: 3 }}>
          {" "}
          {desc}{" "}
        </Typography>
        <img
          src={img}
          alt="review-img"
          style={{
            display: "block",
            margin: "10px auto",
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Rating value={newRate} precision={0.1} readOnly />
        <Typography variant="h6" component="h4" sx={{ mt: 1 }} gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" component="h4">
          {job}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SingleReview;

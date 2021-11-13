import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const NewReview = () => {
  const { user, error, setError } = useAuth();
  const [reviewInfo, setReviewInfo] = useState({
    review: "",
    designation: "",
    rating: "",
  });

  const handleReview = (e) => {
    e.preventDefault();

    if (reviewInfo.rating > 5 || reviewInfo.rating < 0) {
      setError("Please give a rating between 0 to 5");
      return;
    }

    const review = {
      name: user.displayName,
      job: reviewInfo.designation,
      desc: reviewInfo.review,
      rate: reviewInfo.rating,
      img: user.photoURL,
    };

    // post review
    fetch(`https://sheltered-waters-81006.herokuapp.com/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setError("");
          Swal.fire(
            "Great job!",
            "You Submitted your Review Successfully!!",
            "success"
          );
        }
      });

    setReviewInfo({
      review: "",
      designation: "",
      rating: "",
    });
  };
  return (
    <section>
      <Box>
        <Typography variant="h6"> Give a Review</Typography>

        {error && <Alert severity="error"> {error} </Alert>}

        <form onSubmit={handleReview}>
          <TextField
            label="Review"
            type="text"
            variant="filled"
            sx={{ mt: 3 }}
            fullWidth
            multiline
            rows={3}
            required
            value={reviewInfo.review}
            onChange={(e) =>
              setReviewInfo({ ...reviewInfo, review: e.target.value })
            }
          />
          <TextField
            label="Rating Between 0 to 5"
            variant="filled"
            type="number"
            sx={{ mt: 3 }}
            fullWidth
            required
            value={reviewInfo.rating}
            onChange={(e) =>
              setReviewInfo({ ...reviewInfo, rating: e.target.value })
            }
          />
          <TextField
            label="Designation"
            variant="filled"
            type="text"
            sx={{ mt: 3 }}
            fullWidth
            required
            value={reviewInfo.designation}
            onChange={(e) =>
              setReviewInfo({ ...reviewInfo, designation: e.target.value })
            }
          />

          <Button type="submit" variant="contained" sx={{ my: 3 }}>
            {" "}
            Submit
          </Button>
        </form>
      </Box>
    </section>
  );
};

export default NewReview;

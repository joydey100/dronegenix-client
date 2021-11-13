import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const SingleDrone = ({ name, desc, img, price, _id }) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} sx={{ height: "100%" }}>
        <img
          src={img}
          alt="drone-img"
          style={{ width: "280px", margin: "0 auto", display: "block" }}
        />
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            component="h2"
            color="primary"
            gutterBottom
            sx={{ fontWeight: "600" }}
          >
            {" "}
            {name}{" "}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {" "}
            {desc}{" "}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            {" "}
            Price: ${price}{" "}
          </Typography>
          <NavLink
            to={`/drone/${_id}`}
            style={{
              textDecoration: "none",
              margin: "15px 0",
              display: "block",
            }}
          >
            {" "}
            <Button variant="contained"> Buy Now </Button>{" "}
          </NavLink>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SingleDrone;

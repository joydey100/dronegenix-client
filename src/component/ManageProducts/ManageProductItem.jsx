import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ManageProductItem = ({ drone, deleteDrone }) => {
  const { img, name, price, _id } = drone;

  return (
    <Grid item xs={12} md={4}>
      <Paper sx={{ height: "100%" }}>
        <img src={img} alt="drone-img" />
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Price: ${price}
          </Typography>
          <Button
            sx={{ my: 1 }}
            variant="contained"
            color="error"
            onClick={() => deleteDrone(_id)}
          >
            {" "}
            Remove Drone
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ManageProductItem;

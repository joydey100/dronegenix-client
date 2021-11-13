import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SingleOrder = ({ order, deleteOrder }) => {
  const { img, droneName, status, address, _id } = order;
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} sx={{ height: "100%" }}>
        <img
          src={img}
          alt="order-img"
          style={{ width: "250px", margin: "0 auto", display: "block" }}
        />
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ my: 1, fontWeight: 600 }}>
            {" "}
            {droneName}{" "}
          </Typography>
          <Typography variant="h6" sx={{ my: 1 }}>
            {" "}
            Status:{" "}
            <span
              className={status === "Shipped" ? "success" : "error"}
              style={{ fontWeight: 600 }}
            >
              {status}
            </span>
          </Typography>
          <Typography paragraph sx={{ my: 2 }}>
            {" "}
            Billing Address: {address}{" "}
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ mt: 2, mb: 1 }}
            onClick={() => deleteOrder(_id)}
          >
            {" "}
            Remove Order
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SingleOrder;

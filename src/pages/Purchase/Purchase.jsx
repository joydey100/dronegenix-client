import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();

  const [drone, setDrone] = useState({});
  const [orderInfo, setOrderInfo] = useState({ phone: "", address: "" });

  //   get Specific proudct info
  useEffect(() => {
    fetch(`http://localhost:5000/drone/${id}`)
      .then((res) => res.json())
      .then((data) => setDrone(data));
  }, [id]);

  // Handle Order
  const handleOrder = (e) => {
    e.preventDefault();

    const order = {
      name: user.displayName,
      email: user.email,
      droneName: drone.name,
      price: drone.price,
      phone: orderInfo.phone,
      address: orderInfo.address,
      status: "Pending",
      img: drone.img,
    };

    // posting order
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Great Job!",
            text: "Order purchased successfully !",
            icon: "success",
            confirmButtonColor: "#1B37B1",
          });
        }
        history.push("/dashboard");
      });

    // Clear Input value
    setOrderInfo({ phone: "", address: "" });
  };

  return (
    <section>
      <Container>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
            {" "}
            Purchase Drone
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            {drone.name && drone.name}
          </Typography>
          <Typography variant="subtitle1" component="p">
            {" "}
            Price: ${drone.price && drone.price}
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img
              src={drone?.name && drone.img}
              alt="drone-img"
              style={{ margin: "0 auto", display: "block" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Form for purchase */}
            <form onSubmit={handleOrder}>
              <TextField
                label="Name"
                variant="filled"
                type="text"
                fullWidth
                sx={{ my: 2 }}
                value={user.displayName ? user.displayName : ""}
                InputProps={{
                  readOnly: true,
                  shrink: "true",
                }}
              />
              <TextField
                label="Email"
                variant="filled"
                type="email"
                fullWidth
                sx={{ my: 2 }}
                value={user.email ? user.email : ""}
                InputProps={{
                  readOnly: true,
                  shrink: "true",
                }}
              />
              <TextField
                label="Drone Name"
                variant="filled"
                type="text"
                value={drone.name ? drone.name : ""}
                InputProps={{
                  readOnly: true,
                  shrink: "true",
                }}
                fullWidth
                sx={{ my: 2 }}
              />
              <TextField
                label="Price"
                variant="filled"
                type="number"
                value={drone.price ? drone.price : ""}
                InputProps={{
                  readOnly: true,
                  shrink: "true",
                }}
                fullWidth
                sx={{ my: 2 }}
              />
              <TextField
                label="Phone Number"
                variant="filled"
                type="number"
                fullWidth
                required
                sx={{ my: 2 }}
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, phone: e.target.value })
                }
                value={orderInfo.phone}
              />
              <TextField
                label="Billing Address"
                variant="filled"
                type="text"
                fullWidth
                required
                multiline
                rows={4}
                sx={{ my: 2 }}
                value={orderInfo.address}
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, address: e.target.value })
                }
              />
              <Button variant="contained" type="submit">
                {" "}
                Purchase
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Purchase;
